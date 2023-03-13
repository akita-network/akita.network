import Button from '@/components/common/button';
import { ILink } from '@/components/header';
import clsxm from '@/utils/clsxm';
import React from 'react';

export interface IExchanges {
    title: string;
    preamble: string;
    links: ILink[],
    iconName: string;
    iconBackground: string;
}

const Exchange = ({
    title,
    preamble,
    links,
    iconName,
    iconBackground
}: IExchanges) => (
    <div className={clsxm(
        "rounded-xl",
        "bg-white/3",
        "md:inline-flex",
        "md:flex-col",
        "md:flex-nowrap",
        "md:flex-1",
        "md:p-10",
    )}>
        <div
            style={{ backgroundColor: iconBackground }}
            className={clsxm(
                "rounded-full",
                "flex",
                "justify-center",
                "items-center",
                "md:w-18",
                "md:h-18",
                "md:mb-7"
            )}
        >
            <img
                src={`/assets/howtobuy/exchanges/${iconName}`}
            />
        </div>

        <div className='mb-7'>
            <h3 className="text-h4 text-white font-bold md:mb-5">{title}</h3>
            <p className="text-base text-white/80 font-light" dangerouslySetInnerHTML={{ __html: preamble }} />
        </div>

        <div className={clsxm(
            "mt-auto",
            "inline-flex",
            "gap-2.5"
        )}>
            {links.map(link => (
                <Button
                    key={`exchange__${link.text}`}
                    href={link.url}
                    newWindow
                    initialFlex
                >{link.text}</Button>
            ))}
        </div>
    </div>
)

export default Exchange