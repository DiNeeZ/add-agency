import Head from "next/head";

import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Offer from "@/components/offer/offer";

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
      </main>
    </>
  );
};

export default Home;
