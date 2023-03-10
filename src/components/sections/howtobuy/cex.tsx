import clsxm from '@/utils/clsxm';
import React from 'react';

interface ICex {
    images: string[]
}

const Cex = ({
    images
}: ICex) => {
    const firstArray = images.slice(0, images.length / 2);
    const secondArray = images.slice(images.length / 2);

    const imgWrapperClassName = clsxm(
        "bg-white",
        "h-full",
        "rounded-lg",
        "p-2",
        "flex-1",
        "w-20",
        "flex",
        "items-center",
        "justify-center",
        "w-60",
    )

    const renderImage = (img: string) => (
        <div
            key={`ceximg__${img}`}
            className={imgWrapperClassName}
        >
            <img className={clsxm(
                "block",
                "max-h-16"
            )} src={`/assets/howtobuy/cex/${img}`} alt={img} />
        </div>
    )

    const renderArray = (array: string[], left = false) => (
        <div
            className={clsxm(
                "relative",
                "flex-1"
            )}
        >
            <div className={clsxm(
                "absolute",
                "bg-repeat",
                "h-full",
                "animate-scroll-infinite",
                "inline-flex",
                "gap-3.5",
                "flex-nowrap",
                {
                    "left-0": left,
                    "right-0": !left,
                    "animate-scroll-infinite-left": left,
                    "animate-scroll-infinite-right": !left
                }
            )}>
                {array.map(renderImage)}
            </div>
        </div>
    )

    return (
        <div
            className={clsxm(
                "flex",
                "flex-col",
                "h-64",
                "gap-5",
                "relative",
                "py-7",
                "px-5",
                "rounded-xl",
                "overflow-hidden",
            )}
        >
            <div
                className={clsxm(
                    "absolute",
                    "left-0",
                    "top-0",
                    "h-full",
                    "w-full",
                    "z-10",
                    "rounded-xl",
                )}
                style={{ background: "linear-gradient(90deg, #222222 0.52%, rgba(41, 41, 41, 0) 53.06%, #222222 97.52%)" }}
            />
            {renderArray(firstArray, true)}
            {renderArray(secondArray)}
        </div>
    )
}

export default Cex;