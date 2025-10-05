import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Post } from "@/types";
import React from "react";

async function AllBlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();
  // console.log(blogs?.data);
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex flex-col items-center justify-center text-center pb-14 px-4 lg:px-0">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground text-sm max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          libero maiores ipsa labore molestiae veniam omnis laudantium
          repudiandae, architecto ex hic odit reiciendis eum quidem perferendis
          eaque pariatur sapiente ea.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs?.data?.map((blog: Post) => (
          <BlogCard key={blog.id} post={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
}

export default AllBlogPage;
