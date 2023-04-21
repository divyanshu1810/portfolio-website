import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Loader from "@/components/shared/loader";
import Particle from "@/components/shared/particles";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState, useEffect } from "react";
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
        <meta name="description" content="Hey I'm Divyanshu Yadav." />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="TEDxSRMIST" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Particle />
      {!loading && <Loader />}
      {loading && (
        <div>
          <Component {...pageProps} />
          <Footer />
        </div>
      )}
    </>
  );
}
