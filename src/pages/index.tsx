import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic';
import Carousel from '@/components/common/carousel';
import Header, { IHeader } from '@/components/header';
import About from "@/components/sections/about";
import Tokenomics from "@/components/sections/tokenomics";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { i18n } from "../../next-i18next.config";
import HowToBuy from "@/components/sections/howtobuy";
import Roadmap from "@/components/sections/roadmap";
import Introduction from "@/components/sections/introduction";
import Ecosystem from "@/components/sections/ecosystem";
import LearningAndNews from "@/components/sections/learningandnews";
import MobileHero from "@/components/sections/hero/mobilehero";
import DesktopHero, { IHeroItem } from "@/components/sections/hero/desktophero";

const Layout = dynamic(
  () => import('@/components/layout'),
  { ssr: false }
)

interface IContent {
  [key: string]: any
}

export default function Home() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('common');
  const header = t("header", { returnObjects: true }) as IHeader;
  const content = t("content", { returnObjects: true }) as IContent;

  const handleScroll = () => {
    if (ref.current && ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const renderContent = () => {
    return Object.entries(content).map((item, index) => {
      const [key, value] = item;
      switch (key) {
        case "hero": return isTabletOrDesktop ? (
          <Carousel key={`desktopherocarousel__${index}`}>
            {value.desktop.slides?.map((item: IHeroItem, index: number) => (
              <DesktopHero key={`desktophero__${index}`} {...item} />
            ))}
          </Carousel>
        ) : <MobileHero key={`mobileherosection__${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value.mobile} />
        case "about": return isTabletOrDesktop ? <About key={`aboutsection__${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value} /> : null
        case "tokenomics": return (
          <Tokenomics key={`tokenomicssection_${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value} />
        )
        case "howtobuy": return (
          <HowToBuy key={`howtobuysection_${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value} />
        )
        case "roadmap": return isTabletOrDesktop ? <Roadmap key={`roadmap_${index}`} {...value} /> : null;
        case "introduction": return <Introduction isTabletOrDesktop={isTabletOrDesktop} key={`introduction_${index}`} {...value} />;
        case "ecosystem": return isTabletOrDesktop ? <Ecosystem key={`ecosystem_${index}`} {...value} /> : null;
        case "learningandnews": return <LearningAndNews isTabletOrDesktop={isTabletOrDesktop} key={`learningandnews_${index}`} {...value} />;
        default: return null;
      }
    })
  }

  return (
    <>
      <Head>
        <title>AKITA Network</title>
        <meta name="description" content="This is the Official webpage for the Akita Inu Token, an ERC-20 token. AKITA has now been bridged to Avalanche blockchain and the community team members are building AKITA Network DAO." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {header && (
          <div className="relative" ref={ref}>
            <Header isTabletOrDesktop={isTabletOrDesktop} {...header} isSticky={isSticky} />
          </div>
        )}

        <main>
          {content && renderContent()}
        </main>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const selectedLocale = locale || i18n.defaultLocale;
  return {
    props: {
      ...(await serverSideTranslations(selectedLocale, [
        'common',
        'header'
      ])),
      // Will be passed to the page component as props
    },
  }
};