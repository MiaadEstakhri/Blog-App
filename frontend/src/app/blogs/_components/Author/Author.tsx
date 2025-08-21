import { Avatar } from "@ui";
import { AuthorProps } from "./author.type";

function Author({ name, avatarUrl }: AuthorProps) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} width={24} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
}

export default Author;
