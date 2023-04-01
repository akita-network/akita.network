import React from 'react';

interface ISection {
    children: React.ReactNode,
    className?: string;
    id: string
}

const Section = ({
    children,
    className,
    id
}: ISection) => (
    <section
        id={id}
        className={`py-16 md:py-32 px-6 xl:px-8 md:max-w-90vw xl:max-w-2xl md:mx-auto ${className ? className : ""}`}
    >
        {children}
    </section>
)

export default Section;