import { Typography } from '@/components/common/typography';
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
        <a className="no-underline h-full flex flex-col gap-2.5 flex-1 rounded-lg md:bg-learning-and-news"
            href={url}
            target="_blank"
        >
            <div className='rounded-lg h-19.81 md:h-25.75 flex items-center'>
                <img
                    className="rounded-lg md:max-h-25.75 w-full object-cover"
                    src={`/assets/learningandnews/news/${imageUrl}`}
                />
            </div>

            <Typography variant='h5' className="mt-3.5 md:mt-1.875 md:mb-12 md:mx-10 md:font-extrabold">{text}</Typography>
        </a>
    )
}

export default News;