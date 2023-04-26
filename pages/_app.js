import localFont from "next/font/local";

import "normalize.css/normalize.css";
import "@/styles/globals.scss";

const gilroy = localFont({
  src: [
    {
      path: "../assets/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../assets/fonts/Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
    },

    {
      path: "../assets/fonts/Gilroy-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

console.log(gilroy);

const App = ({ Component, pageProps }) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${gilroy.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />;
  </>
);

export default App;
