import React from 'react';
import { motion } from "framer-motion";

interface IBadge {
    children: React.ReactNode;
    color: string
    onHover: (index: number) => void;
    index: number,
}

const Badge = ({
    children,
    color,
    onHover,
    index,
}: IBadge) => {
    return (
        <motion.div
            whileHover={{ x: -10 }}
            className="flex items-center cursor-pointer h-10 md:h-17 "
            style={{ background: "linear-gradient(142.41deg, rgba(255, 255, 255, 0.102) 0%, rgba(255, 255, 255, 0.0442) 100%)" }}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(-1)}
        >
            <div
                className="w-1 h-full rounded-md"
                style={{ backgroundColor: color }}
            />
            <div className="pl-4 md:p-3 md:font-medium text-base md:text-body flex-wrap md:flex-1 md:text-center flex md:justicy-center md:flex-col items-center">{children}</div>
        </motion.div>
    )
}

export default Badge;