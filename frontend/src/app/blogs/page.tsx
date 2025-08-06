import React, { Suspense } from "react";
import PostList from "./_components/PostList/PostList";
import { Spinner } from "@ui";

async function BlogPage() {
  return (
    <div>
      <p>Blog Page</p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
