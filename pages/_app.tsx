import Footer from "@/components/layouts/footer";
import Loader from "@/components/shared/loader";
import Particle from "@/components/shared/particles";
import "@/styles/globals.css";
import { keywords } from "@/utils/keywords";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  const siteConfig = {
    title: "Divyanshu Yadav - Software Engineer | Writer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating innovative digital solutions and exceptional user experiences.",
    image: "https://devyansh.vercel.app/og-image.png",
    author: "Divyanshu Yadav",
    twitterHandle: "@Devyansh18_",
    linkedInProfile: "https://www.linkedin.com/in/divyanshu1810/",
    githubProfile: "https://github.com/divyanshu1810",
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
        {/* Basic Meta Tags */}
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={`${keywords.keys}, ${keywords.about}`} />
        <meta name="author" content={siteConfig.author} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Language and Locale */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.image} />

        {/* Favicon and Icons */}
        <link rel="icon" href="/logo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.image} />
        <meta
          property="og:image:alt"
          content={`${siteConfig.author} - Portfolio Preview`}
        />
        <meta property="og:url" content={siteConfig.image} />
        <meta property="og:site_name" content={siteConfig.author} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={siteConfig.twitterHandle} />
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.image} />
        <meta
          name="twitter:image:alt"
          content={`${siteConfig.author} - Portfolio Preview`}
        />

        {/* Additional Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Security Headers */}
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.author,
              url: siteConfig.image,
              image: siteConfig.image,
              sameAs: [
                siteConfig.linkedInProfile,
                siteConfig.githubProfile,
                `https://twitter.com/${siteConfig.twitterHandle.replace(
                  "@",
                  ""
                )}`,
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Your University", // Replace with your university
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Full Stack Development",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </Head>

      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Google Tag Manager (Optional - alternative to GA4) */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>

      {/* Microsoft Clarity (Optional) */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
        `}
      </Script>

      {/* Facebook Pixel (Optional) */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'FACEBOOK_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Hotjar (Optional) */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      <Particle />
      {!loading && <Loader />}
      {loading && (
        <div>
          <Component {...pageProps} />
          <Footer />
        </div>
      )}

      {/* Google Tag Manager (noscript) - Place after opening body tag */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
