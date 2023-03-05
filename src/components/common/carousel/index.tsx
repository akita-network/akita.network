import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Carousel = ({ children, className }: Props) => (
    <Swiper loop autoplay={{ delay: 5000, disableOnInteraction: true }} slidesPerView={1} modules={[Autoplay]} className={className} suppressHydrationWarning>
        {React.Children.map(children, (child, index: number) => {
            return (
                <SwiperSlide key={`slide__${index}`} suppressHydrationWarning>
                    {React.cloneElement(child as React.ReactElement<any>)}
                </SwiperSlide>
            )
        })}
    </Swiper>
)

export default Carousel;