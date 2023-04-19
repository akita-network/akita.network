import Head from 'next/head';
import React from 'react';

export interface IMeta {
    pageTitle: string;
    description: string;
    socialTitle: string;
    socialDescription: string;
    socialImage: string;
}

const Seo = ({
    description,
    pageTitle,
    socialDescription,
    socialTitle,
    socialImage
}: IMeta) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={socialTitle} key="title" />
        <meta name="og:description" content={socialDescription} />
        <meta
            property="og:image"
            content={socialImage}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default Seo;