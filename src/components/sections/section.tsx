import React from 'react';

interface ISection {
    children: React.ReactNode,
    id: string
}

const Section = ({
    children,
    id
}: ISection) => (
    <section
        id={id}
        className="py-16 md:py-32 px-6 xl:px-8 md:max-w-90vw xl:max-w-2xl md:mx-auto"
    >
        {children}
    </section>
)

export default Section;