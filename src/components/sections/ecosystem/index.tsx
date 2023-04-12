import { Typography, TypographyWithHtml } from '@/components/common/typography';
import { Fira_Sans } from 'next/font/google';
import React from 'react';
import Section from '../section';

const firasans = Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})

export interface IEcosystem {
    component: "ecosystem";
    title: string;
    bottomTitle: string;
    preamble: string;
}

const Ecosystem = ({
    title,
    bottomTitle,
    preamble,
}: IEcosystem) => {
    const preambles = preamble.split("\n");
    return (
        <Section id="ecosystem">
            <div className="md:max-w-80vw xl:max-w-80r md:mx-auto">
                <div className="md:max-w-3xl">
                    <Typography variant='h2' className="uppercase mb-5 flex flex-col">
                        <span className="font-extrabold">
                            {title}
                            <span className={`${firasans.className} ml-5 opacity-70`}>{bottomTitle}</span>
                        </span>
                    </Typography>
                    <div>
                        {preambles.map(pr => <TypographyWithHtml variant='body' key={pr} className="mb-5" withOpacity html={pr} />)}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Ecosystem;