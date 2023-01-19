import Head from "next/head";

import Navigation from "../components/Navigation";
import "../styles/globals.scss";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cory LaFlamme | Programmer & Problem Solver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans:300,300i,400,400i,700,700i,900,900i"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
