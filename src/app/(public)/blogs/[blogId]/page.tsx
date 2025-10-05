import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { Post } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();
  console.log(blogs);
  return blogs?.data?.slice(0, 2).map((blog: Post) => ({
    blogId: String(blog.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json();
  return {
    title: blog?.data?.title,
  };
};

async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json();
  console.log(blog?.data);
  return (
    <div className="max-w-7xl mx-auto py-10">
      <BlogDetailsCard blog={blog?.data}></BlogDetailsCard>
    </div>
  );
}

export default BlogDetailsPage;
