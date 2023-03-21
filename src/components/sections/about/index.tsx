import React from "react";
import clsxm from '@/utils/clsxm';
import Item, { IItem } from "./item";
import Section from "../section";

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
    <Section id="about">
        <div className={clsxm(
            "md:flex",
            "md:justify-center",
        )}>
            {!isTabletOrDesktop ? (
                <div className="z-20">
                    <h2 className="text-white uppercase">{mobile.title}</h2>
                    {mobile.items?.map(item => <p key={`about_text_${item.text}`} className="text-white uppercase">{item.text}</p>)}
                </div>
            ) : (
                desktop.items?.map((item, index) => <Item paddingTop={index > 0 && index < desktop.items.length - 1} key={`about_text_${item.title}`} {...item} />)
            )}
        </div>
    </Section>
)

export default About;