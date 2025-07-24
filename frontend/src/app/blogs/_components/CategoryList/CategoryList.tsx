import React from "react";
import Link from "next/link";
import axios from "axios";
import { CategoryType } from "./categoryList.type";

async function CategoryList() {
  const res = await axios.get("http://localhost:5005/api/category/list");
  const { categories } = res.data.data;
  return (
    <ul className="space-y-4">
      {categories?.map((item: CategoryType) => (
        <li key={item._id}>
          <Link href={`/blogs/category/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
