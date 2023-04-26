import Head from "next/head";

import Header from "@/components/header/header";

const Home = () => {
  return (
    <>
      <Head>
        <title>Marketbite</title>
      </Head>
      <Header />
      <main className={`slkd`}></main>
    </>
  );
};

export default Home;
