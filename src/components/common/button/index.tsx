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
                "sm:px-8",
                "px-4",
                "h-11",
                "bg-button-bg",
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
                // display: flex;
                // flex-direction: row;
                // justify-content: center;
                // align-items: center;
                // padding: 13px 33px;
                // background: rgba(127, 146, 241, 0.25);
                // border: 1px solid rgba(127, 146, 241, 0.22);
                // backdrop-filter: blur(3.5px);
                // border-radius: 10px 2px;
            )}
        >
            {children}
        </a>
    )
}

export default Button;