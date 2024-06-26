import { Fira_Sans } from 'next/font/google';
import React, { useRef, useState } from 'react';
import Phase, { IPhase } from './phase';
import { motion, useScroll, useSpring } from "framer-motion";
import Section from '../section';
import { Typography, TypographyWithHtml } from '@/components/common/typography';

const firasans = Fira_Sans({
    weight: '400',
    subsets: ['latin'],
})

export interface IRoadmap {
    component: "roadmap";
    phaseTitle: string;
    title: string;
    bottomtitle: string;
    preamble: string;
    phases: IPhase[]
}

const Roadmap = ({
    title,
    bottomtitle,
    preamble,
    phases,
    phaseTitle
}: IRoadmap) => {
    const [activePhase, setActivePhase] = useState<number>(-1)
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <Section id="roadmap">
            <div className="md:flex md:justify-between md:max-w-80vw xl:max-w-80r md:mx-auto md:mb-28 md:gap-16 relative">
                <div className="self-start sticky top-20">
                    <Typography variant='h2' className="uppercase mb-5 flex flex-col">
                        <span className="font-extrabold">{title}</span>
                        <span className={`${firasans.className} opacity-70`}>{bottomtitle}</span>
                    </Typography>

                    <TypographyWithHtml variant='body' className="mb-32" withOpacity html={preamble} />

                    <div className='relative'>
                        <img className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4" src="/assets/roadmap/cubeshadow.svg" alt="roadmapcube" />
                        <img className="mx-auto max-w-97%" src="/assets/roadmap/cube.svg" alt="roadmapcube" />
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* <div ref={sectionRef} className="rounded-3xl bg-progress-bg w-5">
                        <motion.div className="w-full h-full rounded-3xl bg-white origin-top" style={{ scaleY }} />
                    </div> */}

                    <div>
                        {phases.map((phase, index) => (
                            <Phase
                                key={`phase__${index}`}
                                {...phase}
                                index={index}
                                phaseTitle={phaseTitle}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Roadmap;