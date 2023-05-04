import Head from "next/head";

import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Offer from "@/components/offer/offer";
import Formats from "@/components/formats/formats";
import Advertiser from "@/components/advertiser/advertiser";
import Webmaster from "@/components/webmaster/webmaster";

const Home = () => {
  return (
    <>
      <Head>
        <title>Marketbite</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Offer />
        <Formats />
        <Advertiser />
        <Webmaster />
      </main>
    </>
  );
};

export default Home;
