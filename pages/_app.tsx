import Footer from "@/components/layouts/footer";
import Loader from "@/components/shared/loader";
import Particle from "@/components/shared/particles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { keywords } from "@/utils/keywords";
import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import Recaptcha from "@/components/shared/recaptcha";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);

    const timeout = setTimeout(() => {
      setLoading(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
      setLoading(false);
    };
  }, []);
  return (
    <>
      <Head>
        <title>DIVYANSHU YADAV</title>
        <meta name="description" content={keywords.keys} />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content={keywords.about} />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="Divyanshu Yadav" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Particle />
      <Recaptcha />
      {/* {!loading && <Loader />} */}
      {/* {loading && ( */}
      <div>
        <Component {...pageProps} />
        <Footer />
      </div>
      {/* )} */}
    </>
  );
}
