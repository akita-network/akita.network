import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Fira_Sans } from 'next/font/google';

const firasans = Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})

export interface IItem {
    title: string;
    text: string;
}

interface ItemProps extends IItem {
    paddingTop?: boolean;
}

const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const Item = ({
    title,
    text,
    paddingTop
}: ItemProps) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            animate={control}
            initial="hidden"
            variants={squareVariants}
            className={`relative inline-block ${paddingTop ? "mt-12" : ""}`}
        >
            <div className="relative">
                <img src="/assets/global/blob.svg" alt={`blob_${title}`} />
                <div className="absolute top-2/4 right-2/4 translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className={`${firasans.className} text-md lg:text-3xl mb-2`}>{title}</h2>
                    <p className="opacity-80 font-extralight text-sm lg:text-xl">{text}</p>
                </div>
            </div>
        </motion.div >
    )
}

export default Item;