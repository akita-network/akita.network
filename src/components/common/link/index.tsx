import NextLink from "next/link";

type Props = {
  children: React.ReactNode;
  url: string;
  locale?: string;
  className?: string;
  onClick?: () => void;
  newWindow?: boolean;
  passHref?: boolean;
};

const Link = ({ newWindow, children, url, locale, className, onClick, passHref }: Props) => (
  <NextLink
    {...onClick && { onClick: onClick }}
    {...(newWindow && { target: "_blank" })}
    href={url}
    {...locale && { locale: locale }}
    {...className && { className: className }}
    passHref={passHref}
  >
    {children}
  </NextLink>
)

export default Link;