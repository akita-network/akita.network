import React from "react";
import Item, { IItem } from "./item";
import Section from "../section";

export interface IAbout {
    items: IItem[];
}

const About = ({
    items
}: IAbout) => (
    <Section id="about">
        <div className="md:flex md:justify-center">
            {/* {!isTabletOrDesktop ? (
                <div className="z-20">
                    <h2 className="text-white uppercase">{mobile.title}</h2>
                    {mobile.items?.map(item => <p key={`about_text_${item.text}`} className="text-white uppercase">{item.text}</p>)}
                </div>
            ) : (
                
            )} */}

            {items?.map((item, index) => <Item paddingTop={index > 0 && index < items.length - 1} key={`about_text_${item.title}`} {...item} />)}
        </div>
    </Section>
)

export default About;