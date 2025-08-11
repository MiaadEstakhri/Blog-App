export type PostListType = {
  _id: string;
  title: string;
  coverImageUrl: string;
  slug: string;
  readingTime: number;
  author: {
    avatarUrl: string;
    name: string;
  };
};
