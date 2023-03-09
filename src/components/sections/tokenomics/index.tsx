import clsxm from '@/utils/clsxm';
import React, { useState } from 'react';
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
        <section className={clsxm(
            "md:max-w-90vw",
            "md:mx-auto",
        )}>
            {isTabletOrDesktop && (
                <div className={clsxm(
                    "text-center",
                    "w-128",
                    "mx-auto",
                    "mb-32",
                    "text-white",
                )}>
                    <h2 className={clsxm(
                        "uppercase",
                        "font-extrabold",
                        "text-h2",
                        "mb-3"
                    )}>{desktop.title}</h2>
                    <p
                        className={clsxm(
                            "opacity-70",
                            "font-light",
                            "text-preamble",
                        )}
                        dangerouslySetInnerHTML={{ __html: desktop.preamble }}
                    />
                </div>
            )}

            <div className={clsxm(
                "flex",
                "mb-32"
            )}>
                {isTabletOrDesktop && <Images group='akita' selected={selectedAkita > -1 ? selectedAkita : -1} />}

                <Token
                    selectedToken={selectedAkita}
                    handleSetSelected={(index: number) => setSelectedAkita(index)}
                    {...isTabletOrDesktop ? desktop.akita : mobile.akita}
                />
            </div>

            <div className={clsxm(
                "flex",
                "mb-32"
            )}>
                {isTabletOrDesktop && <Images noPadding group='hachi' selected={selectedHachi > -1 ? selectedHachi : -1} />}

                <Token
                    selectedToken={selectedHachi}
                    handleSetSelected={(index: number) => setSelectedHachi(index)}
                    {...isTabletOrDesktop ? desktop.hachi : mobile.hachi}
                />
            </div>
        </section>
    )
}

export default Tokenomics;