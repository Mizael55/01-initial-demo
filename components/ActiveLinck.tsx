import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface ActiveLinckProps {
  text: string;
  href: string;
}

const ActiveLinck: FC<ActiveLinckProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <span style={asPath === href ? style : undefined }>{text}</span>
    </Link>
  );
};

export default ActiveLinck;
