import Button from '@/components/common/button';
import { ILink } from '@/components/header';
import React from 'react';

export interface IExchanges {
    title: string;
    preamble: string;
    links: ILink[],
    iconName: string;
    iconBackground: string;
}

interface ExchangesProps extends IExchanges {
    isTabletOrDesktop: boolean;
}

const Exchange = ({
    title,
    preamble,
    links,
    iconName,
    iconBackground,
    isTabletOrDesktop
}: ExchangesProps) => (
    <div className="rounded-xl bg-white/3 inline-flex items-center md:items-start md:flex-col md:flex-nowrap md:flex-1 p-4 md:p-10">
        <div
            style={{ backgroundColor: iconBackground }}
            className="rounded-full flex justify-center items-center w-18 h-18 md:mb-7"
        >
            <img
                src={`/assets/howtobuy/exchanges/${iconName}`}
            />
        </div>

        <div className='flex-1 md:flex-auto ml-5 md:ml-0'>
            <div className='mb-4 md:mb-7'>
                <h3 className="text-h5-base md:text-h5 text-white font-bold md:mb-5">{title}</h3>
                {isTabletOrDesktop && <p className="text-base text-white/80 font-light" dangerouslySetInnerHTML={{ __html: preamble }} />}
            </div>

            <div className="mt-auto inline-flex gap-2.5">
                {links.map(link => (
                    <Button
                        key={`exchange__${link.text}`}
                        href={link.url}
                        newWindow
                        initialFlex
                        minWidth
                    >{link.text}</Button>
                ))}
            </div>
        </div>
    </div>
)

export default Exchange