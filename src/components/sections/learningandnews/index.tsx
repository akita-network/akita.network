import Carousel from '@/components/common/carousel';
import React from 'react';
import Section from '../section';
import News, { INews } from './news';

export interface ILearningAndNews {
    title: string;
    news: INews[];
}

interface LearningAndNewsProps extends ILearningAndNews {
    isTabletOrDesktop: boolean;
}

const LearningAndNews = ({
    title,
    news,
    isTabletOrDesktop
}: LearningAndNewsProps) => {
    return (
        <Section id="learningandnews">
            <div className="md:flex md:justify-between md:items-end xl:max-w-100r md:mx-auto mb-14 md:mb-28">
                <div className="relative md:flex md:items-center md:ml-24">
                    {isTabletOrDesktop && <img className='absolute' src='/assets/learningandnews/learningandnews.svg' alt="buy" />}
                    <div className="md:max-w-1xl md:mx-auto md:ml-16">
                        <h2 className="text-h3 text-center uppercase text-left">
                            <span className="font-bold text-white">{title}</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="md:flex md:flex-wrap md:gap-8">
                    <Carousel
                        slidesPerView={isTabletOrDesktop ? 3 : "auto"}
                        key="news__carousel"
                        spaceBetween={25}
                    >
                        {news
                            .map(news => <News key={news.text} {...news} />)}
                    </Carousel>
                </div>
            </div>
        </Section >
    )
}

export default LearningAndNews;