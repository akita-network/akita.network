import { Fira_Sans } from 'next/font/google';
import React from 'react';
import Section from '../section';
import Blob, { IBlob } from './blob';

const firasans = Fira_Sans({
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
                    <h2 className="text-h2 uppercas mb-5 flex flex-col">
                        <span className="text-white font-extrabold">
                            {title}
                            <span className={`${firasans.className} ml-5 text-white/70`}>{bottomTitle}</span>
                        </span>
                    </h2>
                    <div>
                        {preambles.map(pr => <p key={pr} className="text-preamble text-white/40 mb-5" dangerouslySetInnerHTML={{ __html: pr }} />)}
                    </div>
                </div>
            </div>
            <div>
                <div className="md:flex md:flex-wrap md:gap-8">
                    {blobs
                        .slice(0, isTabletOrDesktop ? blobs.length : 3)
                        .map(blob => <Blob key={blob.title} {...blob} />)}
                </div>
            </div>
        </Section>
    )
}

export default Introduction;