import axios from "axios";
import React from "react";
import { PostListType } from "./postList.type";
import { CoverImage } from "@components";

async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const { posts } = res.data.data;

  return posts?.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts?.map((item: PostListType) => (
        <div
          key={item?._id}
          className="grid col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
        >
          <CoverImage src={item?.coverImageUrl} alt={item?.title} />
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
