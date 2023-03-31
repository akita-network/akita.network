import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

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
    const animation = useAnimation();

    const opacityAnimation = {
        hide: {
            opacity: 0,
            transition: { delay: 0, duration: 0 },
        },
        show: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
        },
    };

    useEffect(() => {
        if (selected > -1) {
            animation.start("show");
        } else {
            animation.start("hide");
        }
    }, [selected])

    return (
        <div className="md:w-1/2 relative flex items-center">
            <img className={`absolute ${!noPadding ? "p-8" : ""}`} src={`/assets/tokenomics/${group}/groupinitial.svg`} />
            <motion.img
                animate={animation}
                variants={opacityAnimation}
                className={`absolute transition-opacity duration-100 ${selected > -1 ? "z-10" : "-z-10"} ${!noPadding ? "p-8" : ""}`}
                src={`/assets/tokenomics/${group}/group${selected > -1 ? selected : "initial"}.svg`}
            />
        </div>
    )
}

export default Images;