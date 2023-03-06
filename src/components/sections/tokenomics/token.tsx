import React from 'react';
import clsxm from '@/utils/clsxm';
import { Fira_Sans } from 'next/font/google';
import Badge from './badge';

const firasans = Fira_Sans({
    weight: '700',
    subsets: ['latin'],
})

interface ILink {
    text: string;
    url: string;
}

interface IText {
    text: string;
    subText?: string;
    color: string;
}

interface IContent {
    [key: string]: ILink
}

export interface IToken {
    title: string;
    titleright: string;
    preamble: string;
    taxes: string;
    links: IContent;
    text: IText[];
}

interface TokenProps extends IToken {
    handleSetSelected: (index: number) => void,
    selectedToken: number
}

const Token = ({
    title,
    titleright,
    preamble,
    taxes,
    links,
    text,
    handleSetSelected,
}: TokenProps) => (
    <div className={clsxm(
        "text-white",
        "md:w-1/2",
        "p-8"
    )}>
        <h3 className={clsxm(

            "text-h3",
            "mb-3",
            "text-center"
        )}>
            <span className={firasans.className}>{title}</span>
            {titleright}
        </h3>

        <div className="mb-3">
            {Object.entries(links).map((link, index) => {
                const [key, value] = link;
                return (
                    <div
                        className={clsxm(
                            "flex",
                            "font-normal",
                            "text-lg",
                            "leading-5",
                        )}
                        key={`tokenomics_link_${index}`}
                    >
                        <p className={clsxm(
                            "uppercase",
                            "mr-2",
                        )}>{key}:</p>
                        <a className={clsxm(
                            "underline",
                            "whitespace-nowrap",
                            "text-ellipsis",
                            "overflow-hidden"
                        )} href={value.url}>{value.text}</a>
                    </div>
                )
            })}
        </div>

        <p className={clsxm(
            "opacity-70",
            "font-light",
            "text-preamble",
            "mb-3"
        )}>{preamble}</p>
        <p className={clsxm(
            "font-bold",
            "text-preamble",
            "mb-8"
        )}>{taxes}</p>

        <div className={clsxm(
            "flex",
            "flex-col",
            "gap-6"
        )}>
            {text.map((t, index) => (
                <Badge
                    key={`badge_${t.text}_${index}`}
                    color={t.color}
                    index={index}
                    onHover={handleSetSelected}
                >
                    {t.text}
                    {t.subText && <p className={clsxm(
                        "text-xl",
                        "leading-6"
                    )}>{t.subText}</p>}
                </Badge>
            ))}
        </div>
    </div>
)

export default Token;