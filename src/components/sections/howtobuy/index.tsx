import { Typography, TypographyWithHtml } from '@/components/common/typography';
import { Fira_Sans, Abhaya_Libre } from 'next/font/google';
import React from 'react';
import Section from '../section';
import Cex from './cex';
import Exchange, { IExchanges } from './exchange';

const firasans = Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})

const abhayaLibre = Abhaya_Libre({
    weight: '700',
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
    claimLink,
    exchanges,
    images,
    isTabletOrDesktop
}: HowToBuyProps) => {
    return (
        <Section id="howtobuy">
            <div className="md:flex md:justify-between md:items-end md:max-w-95% md:mx-auto md:mb-28">
                <div className="relative md:flex md:items-center">
                    {isTabletOrDesktop && <img className='absolute' src='/assets/howtobuy/buy.svg' alt="buy" />}
                    <div className="md:max-w-1xl md:mx-auto md:ml-16">
                        <Typography variant='h3' className="text-center md:text-left mb-5 uppercase">
                            <span className={`${isTabletOrDesktop ? "" : abhayaLibre.className} md:font-bold`}>{title}</span>
                            <span className={`${isTabletOrDesktop ? firasans.className : ""} font-bold md:font-normal md:opacity-80`}>{titleright}</span>
                        </Typography>
                        {isTabletOrDesktop && (
                            <TypographyWithHtml
                                variant='body'
                                html={preamble}
                            />
                        )}
                    </div>
                </div>

                {!isTabletOrDesktop && (
                    <React.Fragment>
                        <div className="-mx-6 mb-5">
                            <Cex images={images} />
                        </div>
                        <TypographyWithHtml
                            variant='body-small'
                            className="mb-5 text-center"
                            html={preamble}
                        />
                    </React.Fragment>
                )}

                {isTabletOrDesktop && (
                    <a href={claimLink.url} target="_blank" className="no-underline flex items-center justify-between bg-green hover:shadow-cta-secondary rounded-lg p-4">
                        <div className='bg-claim-btn rounded-full p-3'>
                            <img src="/assets/global/hachismall.svg" alt="hachismall" />
                        </div>

                        <div className="ml-2 text-right">
                            <p>{claimLink.text} <span className='font-bold text-xl'>{claimLink.textright}</span></p>
                            <p className='text-xs'>{claimLink.smallText}</p>
                        </div>
                    </a>
                )}
            </div>

            <div className="-mx-6 md:mx-0 md:max-w-95% md:mx-auto md:mb-20">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
                    {exchanges.map(exchange => <Exchange isTabletOrDesktop={isTabletOrDesktop} key={exchange.title} {...exchange} />)}
                </div>
            </div>

            {isTabletOrDesktop && (
                <div className="md:mx-auto">
                    <Cex images={images} />
                </div>
            )}
        </Section>
    )
}

export default HowToBuy;