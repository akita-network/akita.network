import React, { Fragment, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { US, TR, ES, CN } from 'country-flag-icons/react/3x2'
import clsxm from '@/utils/clsxm';
import { Popover, Transition } from '@headlessui/react'
import Link from '../link';

const cn = clsxm(
    "max-h-6",
    "cursor-pointer",
    "w-8",
    "sm:w-10"
)

const LanguagePicker = () => {
    const router = useRouter();

    const renderFlag = (locale?: string) => {
        switch (locale) {
            case "en":
                return <US className={cn} />
            case "tr":
                return <TR className={cn} />
            case "cn":
                return <CN className={cn} />
            case "es":
                return <ES className={cn} />
            default: return locale ? <p>{locale.toUpperCase()}</p> : null;
        }
    }

    return (
        <Fragment>
            {router.locale && (
                <Popover
                    className={clsxm(
                        "relative",
                        "flex",
                        "items-center",
                        "justify-center",
                        "rounded",
                        "border",
                        "border-language-border",
                        "bg-dark/30",
                        "w-12",
                        "sm:w-4.6",
                    )}
                >
                    <Popover.Button
                        className={clsxm(
                            "inline-flex",
                            "items-center",
                            "px-1",
                            "sm:px-3",
                            "py-1",
                            "sm:py-2",
                            "h-full",
                            "focus:outline-none",
                        )}
                    >
                        <span>{renderFlag(router.locale)}</span>
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
                        <Popover.Panel
                            className={clsxm(
                                "absolute",
                                "left-1/2",
                                "z-20",
                                "mt-44",
                                "sm:mt-48",
                                "-translate-x-1/2",
                                "transform",
                                "px-4",
                                "sm:px-0",
                                "lg:max-w-3xl"
                            )}
                        >
                            {({ close }) => (
                                <div
                                    className={clsxm(
                                        "overflow-hidden",
                                        "rounded",
                                        "shadow-lg",
                                        "ring-1",
                                        "ring-black",
                                        "ring-opacity-5"
                                    )}
                                >
                                    <div
                                        className={clsxm(
                                            "relative",
                                            "grid",
                                            "bg-white",
                                            "p-2",
                                            "gap-2",
                                            "lg:grid-cols-2"
                                        )}
                                    >
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