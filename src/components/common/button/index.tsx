import clsxm from '@/utils/clsxm';
import React from 'react';

interface IButtonProps {
    children: React.ReactNode,
    href: string;
    newWindow?: boolean;
}

const Button = ({
    children,
    href,
    newWindow
}: IButtonProps) => {
    return (
        <a
            href={href}
            {...newWindow && { target: "_blank" }}
            className={clsxm(
                "flex",
                "flex-row",
                "justify-center",
                "items-center",
                "py-3.5",
                "md:px-8",
                "px-4",
                "h-11",
                "bg-button-bg",
                "border",
                "border-button-border",
                "backdrop-blur-sm",
                "rounded-tl-lg",
                "rounded-br-lg",
                "rounded-tr-sm",
                "rounded-bl-sm",
                "font-bold",
                "text-base",
                "leading-5",
                "flex-1",
                "text-white",
                "whitespace-pre"
            )}
        >
            {children}
        </a>
    )
}

export default Button;