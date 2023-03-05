import clsxm from '@/utils/clsxm';
import React from 'react';
import LanguagePicker from '../common/languagePicker';

interface ILink {
    url: string;
    iconName: string;
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
    <header
        className={clsxm(
            "fixed",
            "top-0",
            "left-0",
            "z-50",
            "w-full",
            "py-3.5",
            "transition-colors",
            "duration-1000",
            isSticky ? "bg-dark" : "bg-transparent"
        )}
    >
        <div
            className={clsxm(
                "max-w-screen-2xl",
                "mx-auto",
                "px-8",
                "w-full",
                "flex",
                "justify-center",
                "sm:justify-end",
                "gap-2.5",
                "sm:gap-3.5"
            )}
        >
            {links.map((link) => (
                <a key={link.iconName} href={link.url} target="_blank">
                    <img
                        className={clsxm(
                            "transition-[max-height]",
                            "duration-300",
                            "max-h-12",
                            "sm:max-h-24"
                        )}
                        src={`/assets/icons/${link.iconName}.svg`}
                        alt={link.iconName}
                    />
                </a>
            ))}

            <LanguagePicker />
        </div>
    </header>
)

export default Header;