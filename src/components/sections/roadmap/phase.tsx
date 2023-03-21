import clsxm from '@/utils/clsxm';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react';

export interface IPhase {
    title: string;
    preamble: string;
}

interface PhaseProps extends IPhase {
    index: number;
    phaseTitle: string;
}

const Phase = ({
    phaseTitle,
    title,
    preamble,
    index
}: PhaseProps) => {
    const [ref, inView] = useInView();

    const animation = useAnimation();

    const opacityAnimation = {
        hide: {
            opacity: 0.3,
        },
        show: {
            opacity: [0.1, 1],
            transition: { delay: 0.3, duration: 1 },
        },
    };

    useEffect(() => {
        if (!inView) {
            animation.start("hide");
        }
        if (inView) {
            animation.start("show");
        }
    }, [inView, animation]);

    return (
        <motion.div
            animate={animation}
            variants={opacityAnimation}
            ref={ref}
            className={clsxm(
                "mb-14",
            )}
        >
            <span className={clsxm(
                "font-bold",
                "text-2378xl",
                "leading-2875",
                "text-shadow-white"
            )}>{`${phaseTitle} ${index}`}</span>

            <h4 className={clsxm(
                "text-4xl",
                "text-white",
                "font-bold",
                "mb-4"
            )}>{title}</h4>

            <p
                className={clsxm(
                    "text-white/60"
                )}
                dangerouslySetInnerHTML={{ __html: preamble }}
            />
        </motion.div>
    )
}

export default Phase;