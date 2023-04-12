import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react';
import { Typography, TypographyWithHtml } from "@/components/common/typography";

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
    index,
}: PhaseProps) => {
    const [ref, inView] = useInView();

    const animation = useAnimation();

    const opacityAnimation = {
        hide: {
            opacity: 0.3,
            transition: { delay: 0.3, duration: 1 },
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
            className="mb-14"
        >
            <span className="font-bold text-dark text-2378xl leading-2875 text-shadow-white">{`${phaseTitle} ${index}`}</span>

            <Typography variant="h4" className="mb-4">{title}</Typography>

            <TypographyWithHtml variant='body' withOpacity html={preamble} />
        </motion.div>
    )
}

export default Phase;