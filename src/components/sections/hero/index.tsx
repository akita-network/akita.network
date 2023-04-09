import Carousel from '@/components/common/carousel';
import React from 'react';
import DesktopHero, { IHeroDesktop } from './desktophero';
import MobileHero, { IHeroMobile } from './mobilehero';

export interface IHero {
    component: "hero";
    desktop: IHeroDesktop;
    mobile: IHeroMobile
}

interface HeroProps extends IHero {
    isTabletOrDesktop: boolean;
}

const Hero = ({
    desktop,
    mobile,
    isTabletOrDesktop
}: HeroProps) => {
    return isTabletOrDesktop ? (
        <Carousel>
            {desktop.slides?.map((item, index: number) => (
                <DesktopHero key={`desktophero__${index}`} {...item} />
            ))}
        </Carousel>
    ) : <MobileHero {...mobile} />
}

export default Hero;