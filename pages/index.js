import Head from "next/head";

import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Offer from "@/components/offer/offer";
import Formats from "@/components/formats/formats";
import Advertiser from "@/components/advertiser/advertiser";
import Webmaster from "@/components/webmaster/webmaster";
import Footer from "@/components/footer/footer";
import FAQ from "@/components/faq/faq";
import Contacts from "@/components/contacts/contacts";

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
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
