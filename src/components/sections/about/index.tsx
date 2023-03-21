import React from "react";
import clsxm from '@/utils/clsxm';
import Item, { IItem } from "./item";

export interface IAbout {
    desktop: {
        items: IItem[];
    };
    mobile: {
        title: string;
        items: IItem[];
    },
}

interface AboutProps extends IAbout {
    isTabletOrDesktop: boolean;
}

const About = ({
    desktop,
    mobile,
    isTabletOrDesktop
}: AboutProps) => (
    <section
        className={clsxm(
            "md:py-56",
            "md:flex",
            "md:justify-center",
            "md:max-w-90vw",
            "xl:max-w-8xl",
            "md:mx-auto",
            "xl:px-8"
        )}
    >
        {!isTabletOrDesktop ? (
            <div className="z-20">
                <h2 className="text-white uppercase">{mobile.title}</h2>
                {mobile.items?.map(item => <p key={`about_text_${item.text}`} className="text-white uppercase">{item.text}</p>)}
            </div>
        ) : (
            desktop.items?.map((item, index) => <Item paddingTop={index > 0 && index < desktop.items.length - 1} key={`about_text_${item.title}`} {...item} />)
        )}
    </section>
)

export default About;