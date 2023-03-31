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
    return (
        <div className="w-18.77 md-w-auto flex items-center flex-col text-center gap-2.5 py-16 px-5 flex-1 border-0056 border-blob-border rounded-md bg-gradient-to-r from-blob-bg-start to-blob-bg-end hover:from-blob-bg-hover-start hover:to-blob-bg-hover-end">
            <img
                className="w-35.75"
                src={`/assets/introduction/${iconName}`}
            />

            <Typography variant='h6'>{title}</Typography>
            <TypographyWithHtml variant="body-small" className="opacity-50" html={preamble} />
        </div>
    )
}

export default Blob;