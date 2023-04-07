import Button from '@/components/common/button';
import { Typography, TypographyWithHtml } from '@/components/common/typography';
import { Akita } from '@/static/images/logo';
import React from 'react';
import { IItem } from '../about/item';

interface IButton {
    text: string;
    link: string;
    newWindow?: boolean;
}

interface IMobileItem {
    title: string;
    preamble: string;
    preambleRight: string;
    asset: string;
    about: {
        title: string;
        items: IItem[];
    };
    buttons: IButton[];
}

const MobileHero = ({
    about,
    asset,
    buttons,
    preamble,
    preambleRight,
    title
}: IMobileItem) => {
    const renderButtons = () => (
        <div className="relative flex gap-5 md:gap-2.5 my-8 md:my-0 flex-wrap justify-center">
            {buttons?.map((btn: IButton) => (
                <Button
                    key={`button__${btn.text}`}
                    href={btn.link}
                    newWindow={btn.newWindow}
                    initialFlex
                >{btn.text}</Button>
            ))}
        </div>
    )

    return (
        <section className="h-screen md:h-screen relative md:flex md:items-center md:px-11 xl:px-40">
            <div style={{
                backgroundImage: `url(${asset})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom center, 50%, 50%"
            }} className="h-full md:px-6 flex justify-center items-center flex-col">
                <div className="z-20 uppercase font-bold text-center mb-8">
                    <Typography variant='h1' className='md:font-bold'>{title}</Typography>
                    <p><span>{preamble}</span><span className='text-blue ml-0.3'>{preambleRight}</span></p>
                </div>
                <Akita />
                {renderButtons()}
                <div className="z-20 text-center">
                    <Typography variant='h2' className="font-bold uppercase mb-2">{about.title}</Typography>
                    {about.items?.map(item => <TypographyWithHtml variant='body-small' key={`about_text_${item.text}`} withOpacity className="uppercase mb-2" html={item.text} />)}
                </div>
            </div>
        </section>
    )
}

export default MobileHero;