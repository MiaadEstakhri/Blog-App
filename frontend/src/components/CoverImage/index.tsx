import Image from "next/image";
import { CoverImageProps } from "./coverImage.type";

export function CoverImage({ src, alt }: CoverImageProps) {
  return (
    <div className="relative aspect-video rounded-md overflow-hidden mb-6">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center transition-all duration-300 ease-out hover:scale-110 "
      />
    </div>
  );
}
