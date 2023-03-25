import React from 'react';

export interface INews {
    text: string;
    url: string;
    imageUrl: string;
}

const News = ({
    text,
    url,
    imageUrl
}: INews) => {
    return (
        <a className="h-full flex flex-col gap-2.5 flex-1 rounded-lg md:bg-learning-and-news"
            href={url}
            target="_blank"
        >
            <img
                className="rounded-lg p-px w-full h-25.75 object-cover"
                src={`/assets/learningandnews/news/${imageUrl}`}
            />

            <span className="mt-3.5 md:mt-1.875 md:mb-12 md:mx-10 md:font-extrabold text-3xl text-white">{text}</span>
        </a>
    )
}

export default News;