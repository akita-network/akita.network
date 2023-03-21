import clsxm from '@/utils/clsxm';
import React from 'react';

export interface IBlob {
    title: string;
    preamble: string;
    iconName: string;
}

const Blob = ({
    title,
    preamble,
    iconName
}: IBlob) => {
    return (
        <div className={clsxm(
            "flex",
            "items-center",
            "flex-col",
            "text-center",
            "gap-2.5",
            "py-16",
            "px-5",
            "flex-1",
            "border-0056",
            "border-blob-border",
            "rounded-md",
            "bg-gradient-to-r",
            "from-blob-bg-start",
            "to-blob-bg-end",
            // "hover:from-pink-500 hover:to-yellow-500"
            "hover:from-blob-bg-hover-start",
            "hover:to-blob-bg-hover-end"
        )}>
            <img
                className="w-3575"
                src={`/assets/introduction/${iconName}`}
            />

            <span className={clsxm(
                "text-lg",
                "leading-6.5",
                "text-white"
            )}>{title}</span>
            <p
                dangerouslySetInnerHTML={{ __html: preamble }}
                className={clsxm(
                    "text-white/50"
                )}
            />
        </div>
    )
}

export default Blob;