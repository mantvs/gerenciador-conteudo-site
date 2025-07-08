import clsx from "clsx";
import Link from "next/link"

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({ children, url, as: Heading = "h2", }: PostHeadingProps) {

  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-2xl lg:text-3xl font-bold",
    h2: "text-1xl/tight sm:text-1xl lg:text-2xl font-bold",
  };

  const commonClasses = "";

  return (
      <Heading className={clsx(headingClassesMap[Heading], commonClasses)}>
        <Link className="hover:text-slate-300 transition" href={url}>{children}</Link>
      </Heading>
  );
}