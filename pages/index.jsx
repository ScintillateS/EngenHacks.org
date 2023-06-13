import React from 'react';

import { MainBackground,  MLHBanner} from '@components/atoms';
import { Layout, Navbar} from '@components/molecules';
import { Hero, About, Sponsors } from '@components/sections';
import FAQ from '@components/sections/FAQ/FAQ';
import { BrowserView } from 'react-device-detect';
import Stats from '@components/sections/Stats';
import Team from '@components/sections/Team';
import Guest from '@components/sections/Guest';




export default function Home() {
  return (
    <>
    <title>Engen Hacks</title>
    <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>Engen Hacks</title>
          <meta name="title" content="Engen Hacks" />
          <meta
            name="description"
            content="Join 100+ hackers for a great week of learning, building, and networking at Engen Hacks 2023 💻"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.engenhacks.org/" />
          <meta property="og:title" content="Engen Hacks Application" />
          <meta
            property="og:description"
            content="Join 100+ hackers for a great week of learning, building, and networking at Engen Hacks 2023 💻"
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
            content="Join 100+ hackers for a great week of learning, building, and networking at Engen Hacks 2023 💻"
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/vds10MB/websiteplanet-dummy-640-X360.png"
          />
      <Navbar />
      {/* <MLHBanner /> */}
      <MainBackground padded>
        <Layout>
            <Hero />
            <About />
            {/* <Stats /> */}
            <Sponsors />
            <Team />
            <Guest />
            <FAQ/>
        </Layout>
      </MainBackground>
    </>
  );
}
