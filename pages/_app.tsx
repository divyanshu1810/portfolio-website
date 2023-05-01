import Footer from "@/components/layouts/footer";
import Loader from "@/components/shared/loader";
import Particle from "@/components/shared/particles";
import ReCAPTCHA from "react-google-recaptcha";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const sitekey: any = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const recaptchaRef: any = React.createRef();
  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    recaptchaRef.current.reset();
  };
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
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={sitekey}
        onChange={onReCAPTCHAChange}
      />
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
