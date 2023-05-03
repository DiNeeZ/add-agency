import localFont from "next/font/local";

import "normalize.css/normalize.css";
import "@/styles/globals.scss";

const gilroy = localFont({
  display: "swap",
  src: [
    {
      path: "../assets/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
      display: "swap",
    },
    {
      path: "../assets/fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
      display: "swap",
    },

    {
      path: "../assets/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
      display: "swap",
    },
    {
      path: "../assets/fonts/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
      display: "swap",
    },

    {
      path: "../assets/fonts/Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
      display: "swap",
    },
    {
      path: "../assets/fonts/Gilroy-Semibold.woff",
      weight: "600",
      style: "normal",
      display: "swap",
    },

    {
      path: "../assets/fonts/Gilroy-Extrabold.woff2",
      weight: "800",
      style: "normal",
      display: "swap",
    },
    {
      path: "../assets/fonts/Gilroy-Extrabold.woff",
      weight: "800",
      style: "normal",
      display: "swap",
    },

    {
      path: "../assets/fonts/Gilroy-Heavy.woff2",
      weight: "900",
      style: "normal",
      display: "swap",
    },
    {
      path: "../assets/fonts/Gilroy-Heavy.woff",
      weight: "900",
      style: "normal",
      display: "swap",
    },
  ],
});

const App = ({ Component, pageProps }) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${gilroy.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default App;
