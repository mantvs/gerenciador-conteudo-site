import Link from "next/link"
import Image from "next/image"

type PostImageCoverProps = {
  src : string;
  href : string;
  alt: string;
};

export function PostImageCover({src, href, alt}: PostImageCoverProps) {
  return (

    <Link className="w-full h-full overflow-hidden rounded-xl" href={href}>
      <Image className="w-full h-full object-cover object-center group-hover:scale-105 transition"
      src={src}
      width={1200}
      height={720}
      alt={alt}
      priority
      />
    </Link>

  )
}