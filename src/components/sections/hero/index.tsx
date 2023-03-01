import Button from '@/components/common/button';
import { Akita } from '@/static/images/logo';
import clsxm from '@/utils/clsxm';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface IButton {
    text: string;
    link: string;
    newWindow?: boolean;
}

export interface IHero {
    desktop: {
        title: string;
        preamble: string;
        video: string;
    };
    mobile: {
        title: string;
        preamble: string;
    },
    buttons: IButton[]
}

const Hero = ({
    desktop,
    mobile,
    buttons
}: IHero) => {
    const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

    const renderButtons = () => (
        <div className={clsxm(
            "relative",
            "flex",
            "gap-2.5",
            "justify-between"
        )}>
            {buttons.map((btn: IButton) => (
                <Button
                    key={`button__${btn.text}`}
                    href={btn.link}
                    {...btn.newWindow && { target: "_blank" }}
                >{btn.text}</Button>
            ))}
        </div>
    )

    return (
        <section
            className={clsxm(
                "h-screen",
                "relative",
                "sm:flex",
                "sm:items-center",
                "sm:pl-11",
                "xl:pl-40"
            )}
        >
            {isMobile ? (
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
                    <div className={clsxm(
                        "max-w-xl",
                        "z-20",
                    )}>
                        <h1 className={clsxm(
                            "text-white",
                            "font-bold",
                            "text-5xl"
                            // font-size: 5ch;
                            // line-height: 1;
                            // font-weight: 700;
                            // text-transform: uppercase;
                        )}>{desktop.title}</h1>
                        <p className={clsxm(
                            "text-white/80",
                            "font-extralight",
                            "text-xl",
                            "leading-normal",
                            "mt-2",
                            "mb-6"
                        )}>{desktop.preamble}</p>
                        {renderButtons()}
                    </div>
                    <div className={clsxm(
                        "before:content-['']",
                        "before:absolute",
                        "before:inset-0",
                        "before:bg-dark",
                        "before:opacity-60",
                        "before:z-10"
                    )}>
                        <video
                            autoPlay
                            muted
                            loop
                            className={clsxm(
                                "bg-cover",
                                "bg-50-50",
                                "absolute",
                                "m-auto",
                                "w-full",
                                "h-full",
                                "-inset-full",
                                "object-cover"
                            )}
                        >
                            <source src={desktop.video} type="video/mp4" />
                        </video>
                    </div>
                </React.Fragment>
            )}
        </section>
    )
}

export default Hero;