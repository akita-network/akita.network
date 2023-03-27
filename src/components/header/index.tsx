import React from 'react';
import LanguagePicker from '../common/languagePicker';

export interface ILink {
    url: string;
    text?: string;
    iconName?: string;
}

export interface IHeader {
    links: ILink[];
}

interface HeaderProps extends IHeader {
    isSticky: boolean;
}

const Header = ({
    links,
    isSticky
}: HeaderProps) => (
    <header className={`fixed top-0 left-0 z-50 w-screen py-3.5 transition-colors duration-1000 ${isSticky ? "bg-dark" : "bg-transparent"}`}>
        <div className="max-w-screen-2xl mx-auto px-8 w-full flex justify-center md:justify-end gap-2.5 md:gap-3.5">
            {links?.map((link) => (
                <a key={link.iconName} href={link.url} target="_blank">
                    <img
                        className={`transition-[max-height] duration-300 max-h-12 ${isSticky ? "sm-max-h-12" : "md:max-h-16"}`}
                        src={`/assets/icons/${link.iconName}.svg`}
                        alt={link.iconName}
                    />
                </a>
            ))}

            <LanguagePicker isSticky={isSticky} />
        </div>
    </header>
)

export default Header;