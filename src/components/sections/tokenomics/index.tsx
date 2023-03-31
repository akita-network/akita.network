import { Typography, TypographyWithHtml } from '@/components/common/typography';
import React, { useState } from 'react';
import Section from '../section';
import Images from './images';
import Token, { IToken } from './token';

export interface ITokenomics {
    desktop: {
        title: string;
        preamble: string;
        akita: IToken;
        hachi: IToken;
    },
    mobile: {
        akita: IToken;
        hachi: IToken;
    }
}

interface TokenomicsProps extends ITokenomics {
    isTabletOrDesktop: boolean;
}

const Tokenomics = ({
    desktop,
    mobile,
    isTabletOrDesktop
}: TokenomicsProps) => {
    const [selectedAkita, setSelectedAkita] = useState<number>(-1);
    const [selectedHachi, setSelectedHachi] = useState<number>(-1);

    return (
        <Section id="tokenomics">
            {isTabletOrDesktop && (
                <div className="text-center w-128 mx-auto mb-32">
                    <Typography variant='h3' className="uppercase font-extrabold mb-3">{desktop.title}</Typography>
                    <TypographyWithHtml
                        withOpacity
                        variant='body'
                        html={desktop.preamble}
                    />
                </div>
            )}

            <div className="flex mb-32 xl:max-w-95% md:mx-auto">
                {isTabletOrDesktop && <Images group='akita' selected={selectedAkita > -1 ? selectedAkita : -1} />}

                <Token
                    selectedToken={selectedAkita}
                    handleSetSelected={(index: number) => setSelectedAkita(index)}
                    isTabletOrDesktop={isTabletOrDesktop}
                    {...isTabletOrDesktop ? desktop.akita : mobile.akita}
                />
            </div>

            <div className="flex xl:max-w-95% md:mx-auto">
                {isTabletOrDesktop && <Images noPadding group='hachi' selected={selectedHachi > -1 ? selectedHachi : -1} />}

                <Token
                    selectedToken={selectedHachi}
                    handleSetSelected={(index: number) => setSelectedHachi(index)} isTabletOrDesktop={isTabletOrDesktop}
                    {...isTabletOrDesktop ? desktop.hachi : mobile.hachi}
                />
            </div>
        </Section>
    )
}

export default Tokenomics;