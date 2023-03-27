import Button from '@/components/common/button';
import { Akita } from '@/static/images/logo';
import React from 'react';

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
        <div className="relative flex gap-2.5">
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
        <section className="h-screen relative md:flex md:items-center md:px-11 xl:px-40">
            {!isTabletOrDesktop ? (
                <React.Fragment>
                    <div className="z-20">
                        <h1 className="text-white">{mobile.title}</h1>
                        <p className="text-white">{mobile.preamble}</p>
                    </div>
                    <Akita />
                    {renderButtons()}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div style={{
                        backgroundImage: "linear-gradient(180deg, rgba(24, 24, 24, 0.56) 72%, #181818)"
                    }} className='h-screen absolute left-0 right-0 z-10' />
                    <div className="max-w-half z-20">
                        <h1 className="text-white font-bold text-5xl">{desktop.title}</h1>
                        <p className="text-white/80 font-extralight text-xl leading-normal mt-2 mb-6">{desktop.preamble}</p>
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