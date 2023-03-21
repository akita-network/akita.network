import clsxm from '@/utils/clsxm';
import { Fira_Sans } from 'next/font/google';
import React from 'react';
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
        <section
            id="howtobuy"
            className={clsxm(
                "md:py-56",
                "xl:px-8"
            )}
        >
            <div className={clsxm(
                "md:flex",
                "md:justify-between",
                "md:items-center",
                "md:max-w-80vw",
                "xl:max-w-6xl",
                "md:mx-auto",
                "md:mb-28"
            )}>
                <div className={clsxm(
                    "relative",
                    "md:flex",
                    "md:items-center"
                )}>
                    {isTabletOrDesktop && <img className='absolute' src='/assets/howtobuy/buy.svg' alt="buy" />}
                    <div className={clsxm(
                        "md:max-w-1xl",
                        "md:mx-auto",
                        "md:ml-16"
                    )}>
                        <h2 className={clsxm(
                            "text-h3",
                            "mb-5",
                            "text-center",
                            "uppercase",
                            "text-left",
                        )}>
                            <span className={clsxm(
                                "text-white",
                                "font-bold"
                            )}>{title}</span>
                            <span className={clsxm(
                                firasans.className,
                                "text-white/80"
                            )}>{titleright}</span>
                        </h2>
                        <p
                            className="text-preamble text-white/60"
                            dangerouslySetInnerHTML={{ __html: preamble.replace("{0}", `<span class="text-white/100">${preamblehighlighted}</span>`) }}
                        />
                    </div>
                </div>

                {isTabletOrDesktop && (
                    <a href={claimLink.url} target="_blank" className={clsxm(
                        "text-white",
                        "no-underline",
                        "flex",
                        "items-center",
                        "justify-between",
                        "bg-green",
                        "hover:shadow-cta-secondary",
                        "rounded-lg",
                        "p-4"
                    )}>
                        <div>
                            <img src="/assets/global/hachismall.svg" alt="hachismall" />
                        </div>

                        <div className={clsxm(
                            "ml-2"
                        )}>
                            <p>{claimLink.text} <span>{claimLink.textright}</span></p>
                            <p>{claimLink.smallText}</p>
                        </div>
                    </a>
                )}
            </div>

            <div className={clsxm(
                "md:max-w-90vw",
                "xl:max-w-8xl",
                "md:mx-auto",
                "mb-20"
            )}>
                <div className={clsxm(
                    "md:flex",
                    "md:flex-wrap",
                    "md:gap-8"
                )}>
                    {exchanges.map(exchange => <Exchange key={exchange.title} {...exchange} />)}
                </div>
            </div>

            <div className={clsxm(
                "md:max-w-95vw",
                "xl:max-w-9xl",
                "md:mx-auto",
            )}>
                <Cex images={images} />
            </div>
        </section>
    )
}

export default HowToBuy;