import React from 'react';

interface ICex {
    images: string[]
}

const Cex = ({
    images
}: ICex) => {
    const firstArray = images.slice(0, images.length / 2);
    const secondArray = images.slice(images.length / 2);

    const imgWrapperClassName = "bg-white h-full rounded-lg p-2 flex-1 w-20 flex items-center justify-center w-60";

    const renderImage = (img: string) => (
        <div
            key={`ceximg__${img}`}
            className={imgWrapperClassName}
        >
            <img className="block max-h-16" src={`/assets/howtobuy/cex/${img}`} alt={img} />
        </div>
    )

    const renderArray = (array: string[], left = false) => (
        <div className="relative flex-1">
            <div className={`absolute bg-repeat h-full animate-scroll-infinite inline-flex gap-3.5 flex-nowrap ${left ? 'left-0 animate-scroll-infinite-left' : 'right-0 animate-scroll-infinite-right'}`}>
                {array.map(renderImage)}
            </div>
        </div>
    )

    return (
        <div className="flex flex-col h-64 gap-5 relative py-7 px-5 rounded-xl overflow-hidden">
            <div
                className="absolute left-0 top-0 h-full w-full z-10 rounded-xl"
                style={{ background: "linear-gradient(90deg, #222222 0.52%, rgba(41, 41, 41, 0) 53.06%, #222222 97.52%)" }}
            />
            {renderArray(firstArray, true)}
            {renderArray(secondArray)}
        </div>
    )
}

export default Cex;