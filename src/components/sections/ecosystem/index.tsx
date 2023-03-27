import { Fira_Sans } from 'next/font/google';
import React from 'react';
import Section from '../section';

const firasans = Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})

export interface IEcosystem {
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
            <div className="md:max-w-80vw xl:max-w-80r md:mx-auto md:mb-36">
                <div className="md:max-w-3xl">
                    <h2 className="text-h2 uppercase mb-5 flex flex-col">
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
        </Section>
    )
}

export default Ecosystem;