import axios from "axios";
import React from "react";

async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const { posts } = res.data.data;
  return (
    <div>
      {posts?.map((item: any) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
}

export default BlogPage;
