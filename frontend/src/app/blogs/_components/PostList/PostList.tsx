import React from "react";
import Link from "next/link";
import axios from "axios";
import { PostListType } from "./postList.type";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Avatar, CoverImage } from "@ui";

async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const { posts } = res.data.data;

  return posts?.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts?.map((post: PostListType) => (
        <div
          key={post?._id}
          className="grid col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
        >
          <CoverImage {...post} />
          <div>
            <Link href={`/blog/${post?.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post?.title}
              </h2>
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-1">
                <Avatar src={post?.author?.avatarUrl} width={24} />
                <span className="text-sm text-secondary-500">
                  {post?.author?.name}
                </span>
              </div>
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stork-secondary-500 mx-1" />
                <span className="">خواندن</span>
                <span className="mx-1 leading-3">{post?.readingTime}</span>
                <span className="">دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
