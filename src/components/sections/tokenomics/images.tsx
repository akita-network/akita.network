import React from 'react';

interface IImages {
    selected: number;
    group: string;
    noPadding?: boolean;
}

const Images = ({
    selected,
    group,
    noPadding = false
}: IImages) => (
    <div className="mt-56 mb-56 xl:mb-0 xl:mt-0 md:w-1/2 md:mx-auto relative flex items-center">
        <img className={`absolute ${!noPadding ? "p-8" : ""}`} src={`/assets/tokenomics/${group}/groupinitial.svg`} />
        <img
            className={`absolute transition-opacity duration-500 opacity-0 ${selected > -1 ? "opacity-100" : ""} ${!noPadding ? "p-8" : ""}`}
            src={`/assets/tokenomics/${group}/group${selected > -1 ? selected : "initial"}.svg`}
        />
    </div>
)

export default Images;