import Head from "next/head";
import "../styles/main.css";

import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Rodape from "../Components/Rodape";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-between">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Rodape />
    </div>
  );
}
