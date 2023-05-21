import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import FilsonProMediumOtf from "public/fonts/FilsonProMedium.otf";
import FilsonProMediumWoff from "public/fonts/FilsonProMedium.woff";
import FilsonProMediumWoff2 from "public/fonts/FilsonProMedium.woff2";
import PoppinsMedium from "public/fonts/Poppins-Medium.ttf";
import PoppinsRegular from "public/fonts/Poppins-Regular.ttf";

import { getCssText } from '~stitches';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="title" content="Engen Hacks" />
          <meta
            name="description"
            content="Join 250+ hackers for a week of learning, building, and networking at Engen Hacks 💻"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.engenhacks.org/" />
          <meta property="og:title" content="Engen Hacks" />
          <meta
            property="og:description"
            content="Join 250+ hackers for a week of learning, building, and networking at Engen Hacks 💻"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/vds10MB/websiteplanet-dummy-640-X360.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.engenhacks.org/" />
          <meta property="twitter:title" content="Engen Hacks" />
          <meta
            property="twitter:description"
            content="Join 250+ hackers for a week of learning, building, and networking at Engen Hacks 💻"
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/vds10MB/websiteplanet-dummy-640-X360.png"
          />

          {/* Preload fonts here */}
          <link
            rel="preload"
            href={FilsonProMediumOtf}
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={FilsonProMediumWoff}
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={FilsonProMediumWoff2}
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={PoppinsMedium}
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={PoppinsRegular}
            as="font"
            type="font/ttf"
            crossOrigin=""
          />

          <style
            id={'stitches'}
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}