import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

type Props = {
    children: React.ReactNode;
    className?: string;
    slidesPerView?: number | "auto";
    spaceBetween?: number;
}

const Carousel = ({
    children,
    className,
    spaceBetween = 0,
    slidesPerView = 1
}: Props) => (
    <Swiper
        loop
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        slidesPerView={slidesPerView}
        modules={[Autoplay]}
        className={className}
        suppressHydrationWarning
        spaceBetween={spaceBetween}
    >
        {React.Children.map(children, (child, index: number) => {
            return (
                <SwiperSlide
                    key={`slide__${index}`}
                    suppressHydrationWarning
                    className={slidesPerView === "auto" ? "w-70" : ""}
                >
                    {React.cloneElement(child as React.ReactElement<any>)}
                </SwiperSlide>
            )
        })}
    </Swiper>
)

export default Carousel;