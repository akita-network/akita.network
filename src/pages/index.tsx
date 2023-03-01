import Head from 'next/head'
import { Inter } from 'next/font/google'
import clsxm from '@/utils/clsxm'
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getContent } from '@/utils/helpers';
import Link from '@/components/common/link';
import LanguagePicker from '@/components/common/languagePicker';
import dynamic from 'next/dynamic';

const Layout = dynamic(
  () => import('@/components/layout'),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'] })

interface ILink {
  url: string;
  name: string;
  newWindow?: boolean;
}

interface IHeader {
  links: ILink[]
}

export interface IPageContent {
  header: IHeader,
}

export default function Home() {
  const {
    header,
  } = getContent();

  return (
    <>
      <Head>
        <title>AKITA Network</title>
        <meta name="description" content="This is the Official webpage for the Akita Inu Token, an ERC-20 token. AKITA has now been bridged to Avalanche blockchain and the community team members are building AKITA Network DAO." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsxm("p-4")}>
        <LanguagePicker />

        <Layout>
          {header.links?.map((link: ILink) => <Link {...link}>{link.name}</Link>)}
        </Layout>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
};