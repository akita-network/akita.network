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
    <div className="mt-56 mb-56 xl:mb-0 xl:mt-0 md:w-1/2 md:mx-auto relative flex items-center justify-center">
        <img className={`absolute ${!noPadding ? "p-8" : ""}`} src={`/assets/tokenomics/${group}/initial.svg`} />
        <img className='max-w-15r p-16 xl:p-8' src={`/assets/tokenomics/${group}.svg`} />
        {selected > -1 && (
            <img
                className={`absolute ${!noPadding ? "p-8" : ""}`}
                src={`/assets/tokenomics/${group}/${selected}.svg`}
            />
        )}

    </div>
)

export default Images;