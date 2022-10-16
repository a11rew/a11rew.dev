import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/fonts/satoshi.css";

import "../scripts/cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div className="cursor-dot-outline" />
    </>
  );
}
