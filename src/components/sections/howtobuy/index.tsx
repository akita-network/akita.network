import { Fira_Sans } from 'next/font/google';
import React from 'react';
import Section from '../section';
import Cex from './cex';
import Exchange, { IExchanges } from './exchange';

const firasans = Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})

interface IClaimLink {
    text: string;
    textright: string;
    smallText: string;
    url: string;
}

interface IHowToBuy {
    title: string;
    titleright: string;
    preamble: string;
    preamblehighlighted: string;
    claimLink: IClaimLink;
    exchanges: IExchanges[]
    images: string[]
}

interface HowToBuyProps extends IHowToBuy {
    isTabletOrDesktop: boolean;
}

const HowToBuy = ({
    title,
    titleright,
    preamble,
    preamblehighlighted,
    claimLink,
    exchanges,
    images,
    isTabletOrDesktop
}: HowToBuyProps) => {
    return (
        <Section id="howtobuy">
            <div className="md:flex md:justify-between md:items-end xl:max-w-100r md:mx-auto md:mb-28">
                <div className="relative md:flex md:items-center md:ml-24">
                    {isTabletOrDesktop && <img className='absolute' src='/assets/howtobuy/buy.svg' alt="buy" />}
                    <div className="md:max-w-1xl md:mx-auto md:ml-16">
                        <h2 className="text-h3 mb-5 uppercase">
                            <span className="text-white font-bold">{title}</span>
                            <span className={`${firasans.className} text-white/80`}>{titleright}</span>
                        </h2>
                        <p
                            className="text-preamble text-white/60"
                            dangerouslySetInnerHTML={{ __html: preamble.replace("{0}", `<span class="text-white/100">${preamblehighlighted}</span>`) }}
                        />
                    </div>
                </div>

                {isTabletOrDesktop && (
                    <a href={claimLink.url} target="_blank" className="text-white no-underline flex items-center justify-between bg-green hover:shadow-cta-secondary rounded-lg p-4">
                        <div className='bg-claim-btn rounded-full p-3'>
                            <img src="/assets/global/hachismall.svg" alt="hachismall" />
                        </div>

                        <div className="ml-2">
                            <p>{claimLink.text} <span className='font-bold text-xl'>{claimLink.textright}</span></p>
                            <p>{claimLink.smallText}</p>
                        </div>
                    </a>
                )}
            </div>

            <div className="md:max-w-90vw xl:max-w-100r md:mx-auto mb-20">
                <div className="md:flex md:flex-wrap md:gap-8">
                    {exchanges.map(exchange => <Exchange key={exchange.title} {...exchange} />)}
                </div>
            </div>

            <div className="md:max-w-95vw md:mx-auto">
                <Cex images={images} />
            </div>
        </Section>
    )
}

export default HowToBuy;