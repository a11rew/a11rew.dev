import "@/styles/globals.css";
import "@/styles/fonts/satoshi.css";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import CursorTrail from "@/scripts/cursor";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize cursor trail client-side
    new CursorTrail();
  }, []);

  return (
    <ReactLenis root>
      <Component {...pageProps} />
      <div>
        <div className="cursor-trail" />
      </div>
    </ReactLenis>
  );
}
