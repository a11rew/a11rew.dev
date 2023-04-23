import clsx, { ClassValue } from "clsx";
import ReactDOM from "react-dom/client";
import { twMerge } from "tailwind-merge";

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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
