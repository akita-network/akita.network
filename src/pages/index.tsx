import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic';
import Header, { IHeader } from '@/components/header';
import About, { IAbout } from "@/components/sections/about";
import Tokenomics, { ITokenomics } from "@/components/sections/tokenomics";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { i18n } from "../../next-i18next.config";
import HowToBuy, { IHowToBuy } from "@/components/sections/howtobuy";
import Roadmap, { IRoadmap } from "@/components/sections/roadmap";
import Introduction, { IIntroduction } from "@/components/sections/introduction";
import Ecosystem, { IEcosystem } from "@/components/sections/ecosystem";
import LearningAndNews, { ILearningAndNews } from "@/components/sections/learningandnews";
import Hero, { IHero } from "@/components/sections/hero";
import Seo, { IMeta } from "@/components/seo";

const Layout = dynamic(
  () => import('@/components/layout'),
  { ssr: false }
)

type Component = IHero | IAbout | ITokenomics | IHowToBuy | IRoadmap | IIntroduction | IEcosystem | ILearningAndNews

interface IContent {
  items: Component[]
}

export default function Home() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('common');
  const meta = t("meta", { returnObjects: true }) as IMeta;
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
    return content.items.map((item, index) => {
      switch (item.component) {
        case "hero": return <Hero key={`herosection__${index}`} isTabletOrDesktop={isTabletOrDesktop} {...item} />
        case "about": return isTabletOrDesktop ? <About key={`aboutsection__${index}`} {...item} /> : null
        case "tokenomics": return (
          <Tokenomics key={`tokenomicssection_${index}`} isTabletOrDesktop={isTabletOrDesktop} {...item} />
        )
        case "howtobuy": return (
          <HowToBuy key={`howtobuysection_${index}`} isTabletOrDesktop={isTabletOrDesktop} {...item} />
        )
        case "roadmap": return isTabletOrDesktop ? <Roadmap key={`roadmap_${index}`} {...item} /> : null;
        case "introduction": return <Introduction isTabletOrDesktop={isTabletOrDesktop} key={`introduction_${index}`} {...item} />;
        case "ecosystem": return isTabletOrDesktop ? <Ecosystem key={`ecosystem_${index}`} {...item} /> : null;
        case "learningandnews": return <LearningAndNews isTabletOrDesktop={isTabletOrDesktop} key={`learningandnews_${index}`} {...item} />;
        default: return null;
      }
    })
  }

  return (
    <>
      {meta && <Seo {...meta} />}

      <Layout>
        {header && (
          <div className="relative" ref={ref}>
            <Header isTabletOrDesktop={isTabletOrDesktop} {...header} isSticky={isSticky} />
          </div>
        )}

        <main>
          {content && content.items?.length > 0 && renderContent()}
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