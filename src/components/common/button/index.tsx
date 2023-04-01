import React from 'react';

interface IButtonProps {
    children: React.ReactNode,
    href: string;
    newWindow?: boolean;
    initialFlex?: boolean;
    smaller?: boolean;
}

const Button = ({
    children,
    href,
    newWindow,
    initialFlex,
    smaller
}: IButtonProps) => {
    return (
        <a
            href={href}
            {...newWindow && { target: "_blank" }}
            className={`flex-1 flex flex-row justify-center items-center py-3.5 md:px-8 px-2 md:h-11 bg-cta-bg border border-cta-border backdrop-blur-sm rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm font-bold text-base leading-5 flex-1 whitespace-pre no-underline transition-border-radius duration-200 hover:bg-blue hover:rounded-tl-sm hover:rounded-br-sm hover:rounded-tr-lg hover:rounded-bl-lg ${initialFlex ? 'flex-initial' : ''} ${smaller ? "max-w-8.125 md:max-w-auto h-2.188" : "h-2.875"}`}
        >
            {children}
        </a>
    )
}

export default Button;