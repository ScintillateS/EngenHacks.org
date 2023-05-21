import { darkTheme, globalStyles } from "~stitches";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <Head>
        <title>Engen Hacks</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
