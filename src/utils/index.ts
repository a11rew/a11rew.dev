import ReactDOM from "react-dom/client";

export function replaceNodeWithReactComponent(
  element: HTMLElement | Element,
  reactComponent: any
) {
  const parent = document.createElement("span");
  const root = ReactDOM.createRoot(parent);
  root.render(reactComponent);
  requestIdleCallback(() => {
    element.replaceWith(...Array.from(parent.childNodes));
  });
}
