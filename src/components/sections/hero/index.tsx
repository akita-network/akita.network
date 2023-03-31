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

export interface IHero {
    desktop: {
        title: string;
        preamble: string;
        asset: string;
        assetType: "image" | "video"
    };
    mobile: {
        title: string;
        preamble: string;
        preambleRight: string;
        asset: string;
        about: {
            title: string;
            items: IItem[];
        }
    },
    buttons: IButton[]
}

export interface IHeroSlides {
    slides: IHero[]
}

interface HeroProps extends IHero {
    isTabletOrDesktop: boolean;
}

const Hero = ({
    desktop,
    mobile,
    buttons,
    isTabletOrDesktop
}: HeroProps) => {
    const renderButtons = () => (
        <div className="relative flex gap-5 md:gap-2.5 my-8 md:my-0">
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
        <section className="h-80vh md:h-screen relative md:flex md:items-center md:px-11 xl:px-40">
            {!isTabletOrDesktop ? (
                <div style={{
                    backgroundImage: `url(${mobile.asset})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center, 50%, 50%"
                }} className="h-full px-6 flex justify-center items-center flex-col">
                    <div className="z-20 uppercase font-bold text-center mb-8">
                        <Typography variant='h1' className='md:font-bold'>{mobile.title}</Typography>
                        <p><span>{mobile.preamble}</span><span className='text-community ml-0.3'>{mobile.preambleRight}</span></p>
                    </div>
                    <Akita />
                    {renderButtons()}
                    <div className="z-20 text-center">
                        <Typography variant='h2' className="font-bold uppercase mb-2">{mobile.about.title}</Typography>
                        {mobile.about.items?.map(item => <TypographyWithHtml variant='body-small' key={`about_text_${item.text}`} withOpacity className="uppercase mb-2" html={item.text} />)}
                    </div>
                </div>
            ) : (
                <React.Fragment>
                    <div style={{
                        backgroundImage: "linear-gradient(180deg, rgba(24, 24, 24, 0.56) 72%, #181818)"
                    }} className='h-screen absolute left-0 right-0 z-10' />
                    <div className="max-w-half z-20">
                        <Typography variant='h1'>{desktop.title}</Typography>
                        <TypographyWithHtml variant='body' html={desktop.preamble} withOpacity className="mt-2 mb-6" />
                        {renderButtons()}
                    </div>
                    <div className="bg-hero-bg">
                        {desktop.assetType === "video" ? (
                            <video
                                autoPlay
                                muted
                                loop
                                className="bg-cover bg-50-50 absolute m-auto w-full h-full -inset-full object-cover"
                            >
                                <source src={desktop.asset} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={desktop.asset} alt={desktop.title} className="bg-cover bg-50-50 absolute m-auto w-full h-full -inset-full object-cover" />
                        )}
                    </div>
                </React.Fragment>
            )}
        </section>
    )
}

export default Hero;