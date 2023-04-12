import { Typography, TypographyWithHtml } from '@/components/common/typography';
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
    const preambles = preamble.split("\n");
    return (
        <div className="flex items-center flex-col text-center gap-2.5 py-16 px-5 border-0056 border-blob-border rounded-md bg-gradient-to-r from-blob-bg-start to-blob-bg-end hover:from-blob-bg-hover-start hover:to-blob-bg-hover-end">
            <img
                className="w-35.75"
                src={`/assets/introduction/${iconName}`}
            />

            <Typography variant='h6'>{title}</Typography>
            <div className='md:max-w-80%'>
                {preambles.map(pr => <TypographyWithHtml variant='body-small' key={pr} className={`opacity-50 ${preambles.length > 1 ? "mb-5" : "mb-0"}`} withOpacity html={pr} />)}
            </div>
        </div>
    )
}

export default Blob;