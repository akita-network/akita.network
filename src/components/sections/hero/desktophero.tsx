import Button from '@/components/common/button';
import { TypographyWithHtml } from '@/components/common/typography';
import React from 'react';

interface IButton {
    text: string;
    link: string;
    newWindow?: boolean;
}

interface IHeroItem {
    title: string;
    titleOther: string;
    preamble: string;
    asset: string;
    assetType: "image" | "video";
    buttons: IButton[];
}

export interface IHeroDesktop {
    slides: IHeroItem[]
}

const DesktopHero = ({
    title,
    titleOther,
    preamble,
    asset,
    assetType,
    buttons,
}: IHeroItem) => {
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
        <section className="h-screen md:h-screen relative md:flex md:items-center ">
            <div style={{
                backgroundImage: "linear-gradient(180deg, rgba(24, 24, 24, 0.56) 72%, #181818)"
            }} className='h-screen absolute left-0 right-0 z-10' />
            <div className="max-w-screen-3xl px-8 mx-auto grid grid-cols-2 z-20">
                <div>
                    <TypographyWithHtml variant='h1' html={title.replace("{0}", `<span class='opacity-60 font-parodisme font-normal'>${titleOther}</span>`)} className="uppercase font-bold" />
                    <TypographyWithHtml variant='body' html={preamble} withOpacity className="mt-2 mb-6" />
                    {renderButtons()}
                </div>
            </div>
            <div className="bg-hero-bg">
                {assetType === "video" ? (
                    <video
                        autoPlay
                        muted
                        loop
                        className="bg-cover bg-50-50 absolute m-auto w-full h-full -inset-full object-cover"
                    >
                        <source src={asset} type="video/mp4" />
                    </video>
                ) : (
                    <img src={asset} alt={title} className="bg-cover bg-50-50 absolute m-auto w-full h-full -inset-full object-cover" />
                )}
            </div>
        </section>
    )
}

export default DesktopHero;