import Image from "next/image";
import Link from "next/link";
import { CoverImageProps } from "./coverImage.type";

export function CoverImage({ coverImageUrl, title, slug }: CoverImageProps) {
  return (
    <div className="relative aspect-video rounded-md overflow-hidden mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center transition-all duration-300 ease-out hover:scale-110 "
        />
      </Link>
    </div>
  );
}
