import Image from "next/image";
import { AvatarType } from "./avatar.type";

export function Avatar({ src, width = 24 }: AvatarType) {
  return (
    <div>
      <Image
        src={src}
        width={width}
        height={width}
        alt={src}
        className="rounded-full ring-1 ring-secondary-300 mx-1"
      />
    </div>
  );
}
