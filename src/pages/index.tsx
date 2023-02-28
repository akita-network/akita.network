import Head from 'next/head'
import { Inter } from 'next/font/google'
import clsxm from '@/utils/clsxm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AKITA Network</title>
        <meta name="description" content="This is the Official webpage for the Akita Inu Token, an ERC-20 token. AKITA has now been bridged to Avalanche blockchain and the community team members are building AKITA Network DAO." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsxm("p-4")}>
        <h2 className={inter.className}>
          AKITA Network New Web!
        </h2>
      </main>
    </>
  )
}
