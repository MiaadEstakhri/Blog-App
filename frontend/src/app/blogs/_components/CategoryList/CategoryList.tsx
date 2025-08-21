import React from "react";
import Link from "next/link";
import axios from "axios";
import { CategoryType } from "./categoryList.type";

async function CategoryList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/category/list`
  );
  const { categories } = res.data.data;
  return (
    <ul className="space-y-4">
      <li>
        <Link href="/blogs">همه</Link>
      </li>
      {categories?.map((item: CategoryType) => (
        <li key={item._id}>
          <Link href={`/blogs/category/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
