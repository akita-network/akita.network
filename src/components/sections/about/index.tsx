import React from "react";
import clsxm from '@/utils/clsxm';
import { useMediaQuery } from 'react-responsive';
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

const About = ({
    desktop,
    mobile,
}: IAbout) => {
    const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 640px)' });

    return (
        <section
            className={clsxm(
                "sm:py-56",
                "sm:flex",
                "sm:justify-center"
            )}
        >
            {!isTabletOrDesktop ? (
                <div className="z-20">
                    <h2 className="text-white uppercase">{mobile.title}</h2>
                    {mobile.items.map(item => <p key={`about_text_${item.text}`} className="text-white uppercase">{item.text}</p>)}
                </div>
            ) : (
                desktop.items.map((item, index) => <Item paddingTop={index > 0 && index < desktop.items.length - 1} key={`about_text_${item.title}`} {...item} />)
            )}
        </section>
    )
}

export default About;