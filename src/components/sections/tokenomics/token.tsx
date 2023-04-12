import React from 'react';
import { Fira_Sans, Abhaya_Libre } from 'next/font/google';
import Badge from './badge';
import { Typography, TypographyWithHtml } from '@/components/common/typography';

const firasans = Fira_Sans({
    weight: '700',
    subsets: ['latin'],
})

const abhayaLibre = Abhaya_Libre({
    weight: '700',
    subsets: ['latin'],
})

interface ILink {
    text: string;
    textRight?: string;
    linkText: string;
    url: string;
}

interface IText {
    text: string;
    subText?: string;
    color: string;
}

export interface IToken {
    title: string;
    titleRight?: string;
    preamble: string;
    taxes: string;
    links: ILink[];
    text: IText[];
}

interface TokenProps extends IToken {
    handleSetSelected: (index: number) => void,
    selectedToken: number;
    isTabletOrDesktop: boolean;
}

const Token = ({
    title,
    titleRight,
    preamble,
    taxes,
    links,
    text,
    handleSetSelected,
    isTabletOrDesktop
}: TokenProps) => (
    <div className="xl:w-1/2 md:pl-8 text-center md:text-left">
        <Typography variant='h4' className={`flex flex-wrap justify-center text-center uppercase ${isTabletOrDesktop ? "mb-3" : "font-bold"}`}>
            <span className={`${isTabletOrDesktop ? firasans.className : abhayaLibre.className} mr-2`}>{title}</span>
            {titleRight}
        </Typography>

        {links && isTabletOrDesktop && (
            <div className="mb-3">
                {links.map((link, index) => (
                    <div
                        className="flex font-normal text-lg leading-5"
                        key={`tokenomics_link_${index}`}
                    >
                        <p className="uppercase mr-2">{link.text}:</p>
                        <a target="_blank" className="underline whitespace-nowrap text-ellipsis overflow-hidden" href={link.url}>{link.linkText}</a>
                    </div>
                ))}
            </div>
        )}

        <TypographyWithHtml variant='body' className="mb-1 md:mb-3" withOpacity html={preamble} />
        <TypographyWithHtml variant='body' className="mb-4 md:mb-8" html={taxes} />

        <div className="flex flex-col gap-3 md:gap-6 mb-6 md:mb-0">
            {text?.map((t, index) => (
                <Badge
                    key={`badge_${t.text}_${index}`}
                    color={t.color}
                    index={index}
                    onHover={handleSetSelected}
                >
                    <span>{t.text}</span>
                    {t.subText && <span className="text-xs md:text-xl md:leading-6 ml-2 md:ml-0">{t.subText}</span>}
                </Badge>
            ))}
        </div>

        {links && !isTabletOrDesktop && (
            links.map((link, index) => (
                <div
                    className="flex flex-col font-normal text-lg leading-5 mb-4"
                    key={`tokenomics_link_${index}`}
                >
                    <p className="mb-2">{link.text} <span className='opacity-60'>{link.textRight}</span></p>
                    <a target="_blank" className="text-base-small md:text-base opacity-60 underline whitespace-nowrap text-ellipsis overflow-hidden" href={link.url}>{link.linkText}</a>
                </div>
            ))
        )}
    </div>
)

export default Token;