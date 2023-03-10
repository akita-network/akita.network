import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic';
import Hero, { IHero } from '@/components/sections/hero';
import Carousel from '@/components/common/carousel';
import Header, { IHeader } from '@/components/header';
import About from "@/components/sections/about";
import Tokenomics from "@/components/sections/tokenomics";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { i18n } from "../../next-i18next.config";
import HowToBuy from "@/components/sections/howtobuy";

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
        case "hero": return (
          value.slides.length > 1 ? (
            <Carousel key={`herosection__${index}`}>
              {value.slides?.map((item: IHero, index: number) => (
                <Hero isTabletOrDesktop={isTabletOrDesktop} key={`hero__${index}`} {...item} />
              ))}
            </Carousel>
          ) : <Hero key={`herosection__${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value.slides[0]} />
        )
        case "about": return (
          <About key={`aboutsection__${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value} />
        )
        case "tokenomics": return (
          <Tokenomics key={`tokenomicssection_${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value} />
        )
        case "howtobuy": return (
          <HowToBuy key={`howtobuysection_${index}`} isTabletOrDesktop={isTabletOrDesktop} {...value} />
        )
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
            <Header {...header} isSticky={isSticky} />
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
      ])),
      // Will be passed to the page component as props
    },
  }
};