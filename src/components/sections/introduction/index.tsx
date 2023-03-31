import { Typography, TypographyWithHtml } from '@/components/common/typography';
import { Fira_Sans, Abhaya_Libre } from 'next/font/google';
import React from 'react';
import Section from '../section';
import Blob, { IBlob } from './blob';

const firasans = Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})

const abhayaLibre = Abhaya_Libre({
    weight: '400',
    subsets: ['latin'],
})

export interface IIntroduction {
    title: string;
    bottomTitle: string;
    preamble: string;
    blobs: IBlob[];
}

interface IntroductionProps extends IIntroduction {
    isTabletOrDesktop: boolean;
}

const Introduction = ({
    title,
    blobs,
    bottomTitle,
    preamble,
    isTabletOrDesktop
}: IntroductionProps) => {
    const preambles = preamble.split("\n");
    return (
        <Section id="introduction">
            <div className="md:max-w-80vw xl:max-w-80r md:mx-auto md:mb-36">
                <div className="md:max-w-3xl">
                    <Typography variant='h2' className="uppercase mb-5 flex flex-col text-center md:text-left">
                        <span className="flex flex-col md:block font-extrabold">
                            <span>{title}</span>
                            <span className={`${isTabletOrDesktop ? firasans.className : abhayaLibre.className} md:ml-5 opacity-70`}>{bottomTitle}</span>
                        </span>
                    </Typography>
                    {isTabletOrDesktop && (
                        <div>
                            {preambles.map(pr => <TypographyWithHtml variant='body' key={pr} className="mb-5" withOpacity html={pr} />)}
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-stretch gap-4 md:gap-8">
                    {blobs
                        .slice(0, isTabletOrDesktop ? blobs.length : 3)
                        .map(blob => <Blob key={blob.title} {...blob} />)}
                </div>
            </div>
        </Section>
    )
}

export default Introduction;