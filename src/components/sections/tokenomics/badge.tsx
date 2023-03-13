import clsxm from '@/utils/clsxm';
import React from 'react';
import { motion } from "framer-motion";

interface IBadge {
    children: React.ReactNode;
    color: string
    onHover: (index: number) => void;
    index: number
}

const Badge = ({
    children,
    color,
    onHover,
    index
}: IBadge) => {
    return (
        <motion.div
            whileHover={{ x: -10 }}
            className={clsxm(
                "bg-badge-bg",
                "flex",
                "items-center",
                "h-17",
                "cursor-pointer"
            )}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(-1)}
        >
            <div
                className={clsxm(
                    "w-1",
                    "h-full",
                    "rounded-md"
                )}
                style={{ backgroundColor: color }}
            />
            <div className={clsxm(
                "p-3",
                "md:font-medium",
                "md:text-preamble",
                "md:flex-1",
                "md:text-center"
            )}>{children}</div>
        </motion.div>
    )
}

export default Badge;