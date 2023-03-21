import ReactDOM from "react-dom/client";

export function replaceNodeWithReactComponent(
  element: HTMLElement | Element,
  reactComponent: any
) {
  const parent = document.createElement("span");
  const root = ReactDOM.createRoot(parent);
  root.render(reactComponent);
  const callback = () => {
    element.replaceWith(...Array.from(parent.childNodes));
  };
  if (window.requestIdleCallback) {
    window.requestIdleCallback(callback);
  } else {
    window.setTimeout(callback, 1);
  }
}
