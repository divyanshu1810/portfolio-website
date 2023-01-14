import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Particle from "@/components/shared/particles";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Head>
        <title>DIVYANSHU YADAV</title>
        <meta name="description" content="Hey I'm Divyanshu Yadav." />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="TEDxSRMIST" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Particle />
      <Footer />
    </>
  );
}
