import React, { Fragment, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { US, TR, ES, CN } from 'country-flag-icons/react/3x2'
import { Popover, Transition } from '@headlessui/react'
import Link from '../link';

const cn = "max-h-6 cursor-pointer w-5 md:w-10";

interface ILanguagePickerProps {
    isSticky?: boolean;
}

const LanguagePicker = ({
    isSticky
}: ILanguagePickerProps) => {
    const router = useRouter();

    const renderFlag = (locale?: string, isSelected?: boolean) => {
        switch (locale) {
            case "en":
                return <US className={`${cn} ${isSelected ? "" : "w-6"}`} />
            case "tr":
                return <TR className={`${cn} ${isSelected ? "" : "w-6"}`} />
            case "cn":
                return <CN className={`${cn} ${isSelected ? "" : "w-6"}`} />
            case "es":
                return <ES className={`${cn} ${isSelected ? "" : "w-6"}`} />
            default: return locale ? <p>{locale.toUpperCase()}</p> : null;
        }
    }

    return (
        <Fragment>
            {router.locale && (
                <Popover className={`relative flex items-center justify-center rounded border border-language-border bg-dark/30 w-full xs:w-auto`}>
                    <Popover.Button className={`inline-flex items-center px-1 md:py-2 h-full focus:outline-none ${isSticky ? "px-0.688 md:px-0.188" : "px-0.688"}`}>
                        <span>{renderFlag(router.locale, true)}</span>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute left-1/2 z-20 mt-36 md:mt-48 -translate-x-1/2 transform md:px-0 lg:max-w-120r w-full">
                            {({ close }) => (
                                <div className="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative flex flex-col items-center bg-white p-2 gap-2 lg:grid-cols-2">
                                        {router.locales?.map((locale: string) => router.locale !== locale && (
                                            <Link
                                                key={locale}
                                                url={router.asPath}
                                                locale={locale}
                                                onClick={() => close()}
                                            >
                                                {renderFlag(locale)}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Popover.Panel>
                    </Transition>
                </Popover >
            )}
        </Fragment>

    )
}

export default LanguagePicker;