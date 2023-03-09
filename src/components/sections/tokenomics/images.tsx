import clsxm from '@/utils/clsxm';
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
}: IImages) => {
    return (
        <div className={clsxm(
            "text-white",
            "md:w-1/2",
            "relative",
            "flex",
            "items-center",

        )}>
            <img className={clsxm(
                "absolute",
                {
                    "p-8": !noPadding
                }
            )} src={`/assets/tokenomics/${group}/groupinitial.svg`} />
            <img className={clsxm(
                "absolute",
                "transition-opacity",
                "duration-100",
                selected > -1 ? "opacity-100" : "opacity-0",
                selected > -1 ? "z-10" : "-z-10",
                {
                    "p-8": !noPadding
                }
            )} src={`/assets/tokenomics/${group}/group${selected > -1 ? selected : "initial"}.svg`} />
        </div>
    )
}

export default Images;