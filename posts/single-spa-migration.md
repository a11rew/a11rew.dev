---
title: "Migrating Create-React-App project to Single-SPA"
coverImage: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cjn2a64heth7c019ancp.png"
date: "2022-03-16T05:35:07.322Z"
tags: ["react", "single-spa"]
ogImage:
  url: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cjn2a64heth7c019ancp.png"
draft: false
description: "Learn how to migrate a Create-React-App project to work as a Single-SPA micro-frontend using CRACO, without ejecting from CRA's convenient tooling."
---

## Introduction

The React team describes [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) (CRA) as a toolchain for easily getting started with single page applications in React. Create-React-App allows you to get started building React applications as easily as running a single `npx` [command](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

[Single-SPA](https://spa.js.org) (yes, the name is [redundant](https://single-spa.js.org/docs/getting-started-overview#isnt-single-spa-sort-of-a-redundant-name)) is best described as a framework for hosting multiple JavaScript micro-frontends on the same website. Single-SPA is framework agnostic and as such, the aforementioned "micro-frontend" could be built with any framework; Angular, Vue, Ember even Backbone.js for those on the [bleeding edge](https://www.youtube.com/watch?v=RBgm7Zgv2dM).

Single-SPA micro-frontend applications can be divided into two main sections;

- A Single-SPA root config

  > A single-spa root config, which renders the HTML page and the JavaScript that registers the [individual] applications.

- Various micro-frontend apps
  > Applications which can be thought of as single-page applications packaged up into modules.

Although sufficient for many a project, CRA's default tooling and ease of setup quickly becomes a bottleneck in more advanced use cases. Single-SPA for example assumes by default you have a modifiable Webpack config. Making getting a CRA app running as a Single-SPA micro-frontend out of the box a cryptic error wrought exercise in futility.

A solution would be to eject from CRA and have manual control over build tools CRA uses like Webpack and Babel but then you lose the ease of use and also miss out on CRA updates.
(Cue the [hero entry music](https://www.youtube.com/watch?v=wqnt86xnocM&ab_channel=PrasadLomte)) [CRACO](https://github.com/gsoft-inc/craco) (Create React App Configuration Override) is a configuration layer for Create-React-App that allows you to customize CRA's config without ejecting. If you've ever used [TailwindCSS](https://tailwindcss.com/) in a CRA app you've most likely have had to set up CRACO. We'll use CRACO to get our CRA app to work as a Single-SPA application without ejecting.

This article will go over migrating an existing Create-React-App SPA into a registered Single-SPA application. This article assumes you have a root config setup already and are migrating an existing Create-React-App frontend. If you're starting out building a micro-frontend for Single-SPA you should use the [create-single-spa](https://single-spa.js.org/docs/getting-started-overview#quick-start) utility.

## Groundwork

We'll first have to add CRACO to our project

```
yarn add @craco/craco
```

Then we'll need to update `scripts` in our `package.json` replacing react-scripts with craco in all keys but `eject`

```
  {
    "scripts": {
     - "start": "react-scripts start",
     - "build": "react-scripts build",
     - "test": "react-scripts test",
     + "start": "craco start",
     + "build": "craco build",
     + "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
```

Starting our CRA app with `yarn start` at this point should work as it normally would.

We then add the required dependencies for migrating to a Single-SPA frontend

```
yarn add -D craco-plugin-single-spa-application single-spa-react
```

Next, create a `craco.config.js` at the project root like so;

```
singleSpaApplicationPlugin = require("craco-plugin-single-spa-application")

module.exports = {
  plugins: [
    {
      plugin: singleSpaApplicationPlugin,
      options: {
        orgName: "my-org",
        projectName: "my-app",
        entry: "src/single-spa-index.jsx",
        externals: ["react", "react-dom"],
        minimize: true,
      },
    },
  ],
}
```

Breaking the CRACO config down, we first import the [single-spa-application CRACO plugin](https://github.com/hasanayan/craco-plugin-single-spa-application#craco-plugin-single-spa-application). This nifty little package greatly reduces the amount of config we have to set up to get our micro-frontend running. You can see what exactly it changes in your craco.config [here](https://github.com/hasanayan/craco-plugin-single-spa-application/blob/main/src/index.js) and you could make the config changes yourself if you'd rather avoid the dependency.

We then pass the plugin several options;
`orgName` - Name of the root frontend application our micro-frontend will be deployed in. All micro-frontends running in the same root config must use the same orgName.
`projectName` - Refers to the name we wish our micro-frontend to be referenced by in the root config. This is used in registering our microfrontend.
`entry` - Refers to the starting point of our micro-frontend app. Normally index.js in a regular CRA app.
`externals` - Specify global dependencies which are made available from the root config here and as such won't be bundled with our micro-frontend.
`minimize` - Enables Webpack's [`optimize.minimize`](https://webpack.js.org/configuration/optimization/#optimizationminimize) significantly reducing the production bundle size.

## Down and Dirty

In case you were getting comfortable thinking "this seems pretty easy", well, here to burst your bubble. (Jkjk) Create a `single-spa-index.jsx` or ` single-spa-index.tsx` for TypeScript in your `src` folder.

```
//src/single-spa-index.jsx

import React from "react"
import ReactDOM from "react-dom"
import singleSpaReact from "single-spa-react"
import App from "./App"

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return (
      <div>
          Error in my-app. Check browser console for details.
      </div>
    )
  },
})

export const { bootstrap, mount, unmount } = lifecycles
```

Breaking it down;
We create a `single-spa-index.jsx` to replace our `index.jsx` as the entry point for our project. We import the single-spa-react package to obtain lifecycle methods for our application.

These "lifecycle" methods as Single-SPA calls them are essential building blocks of a Single-SPA micro-frontend.
A major selling point of micro-frontend architecture in general is the ability to develop different parts of a frontend in isolation and switch between these micro-apps seamlessly.
For Single-SPA in particular, switching micro-frontends does not require a page-reload.
Single-SPA achieves this by managing different micro-frontends with the [lifecycle methods](https://single-spa.js.org/docs/module-types/#applications-have-managed-lifecycles) they export. This is akin to the lifecycle methods and hooks in component based frameworks like React, Vue and Angular. Single-SPA then uses those lifecycle methods to manage the different micro-frontends.

Our root component is the same component you would render to `ReactDOM` in `index.jsx` regularly. If you were importing CSS files or wrapping <App /> with Context providers for example, move those into your App.jsx.

We also use the `errorBoundary` option to define an [Error Boundary](https://reactjs.org/docs/error-boundaries.html). Introduced in React 16, Error boundaries allow you to catch errors in deeply nested react components which otherwise would raise cryptic, hard to debug errors. Our micro-frontend is a good example of such a nested component. Error boundaries are useful in other applications like [Error handling](https://reactjs.org/docs/concurrent-mode-suspense.html#handling-errors) when using Suspense in React. (🤞 Obligatory finger cross hoping we get Suspense soon)

Run `yarn build` to generate your micro-frontend app bundle. The output will be located under the `build` folder and named `my-org-my-app.js`. You now have a micro-frontend that can be registered and deployed as part of a larger org frontend 🎉.

**References**

- https://hasanayan.me/micro-frontends-cra-to-single-spa-application/
- https://stephencharlesweiss.com/single-spa-craco-react
