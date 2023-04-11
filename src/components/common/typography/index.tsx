import React, { ElementType } from "react";

type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "body-small"
    | "small";

interface ITypography {
    variant: Variant;
    className?: string;
    as?: ElementType;
}

interface Props extends ITypography {
    children: React.ReactNode;
}

interface PropsWithHtml extends ITypography {
    html: string;
    withOpacity?: boolean;
}

const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "p",
    "body-small": "p",
    small: "span"
};

const sizes: Record<Variant, string> = {
    h1: "text-h1-small md:text-h1",
    h2: "text-h2-small md:text-h2",
    h3: "text-h3-small md:text-h3",
    h4: "text-h4-small md:text-h4",
    h5: "text-h5-small md:text-h5",
    h6: "text-h6",
    body: "text-body-small md:text-body",
    "body-small": "text-body-small",
    small: "text-sm sm:text-xs"
};

export const Typography = ({ variant, children, className, as }: Props) => {
    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return <Tag className={`${sizeClasses} ${className ? className : ""}`}>{children}</Tag>;
};

export const TypographyWithHtml = ({ variant, html, className, withOpacity, as }: PropsWithHtml) => {
    const htmlTags = html.split("\n");
    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return (
        <React.Fragment>
            {htmlTags.map((tag, index) => <Tag key={`${tag}_${index}`} className={`${sizeClasses} ${className ? className : ""} ${withOpacity ? "opacity-60 md:opacity-40" : ""}`} dangerouslySetInnerHTML={{ __html: tag }} />)}
        </React.Fragment>
    )
};