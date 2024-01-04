import "@/styles/globals.css";
import "@/styles/fonts/satoshi.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

import CursorTrail from "@/scripts/cursor";
import Script from "next/script";

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
      <Script
        defer
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-66BSQ6DB4J"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-66BSQ6DB4J');`}
      </Script>
    </>
  );
}
