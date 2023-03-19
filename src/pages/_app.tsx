import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/fonts/satoshi.css";

import CursorTrail from "@/scripts/cursor";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize cursor trail client-side
    new CursorTrail();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div>
        <div className="cursor-trail" />
      </div>
    </>
  );
}
