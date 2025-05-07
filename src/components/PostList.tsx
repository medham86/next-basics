import Link from "next/link";
import { Suspense } from "react";
import ProductSkeleton from "./ProductSkeleton";

interface IProps {
  posts: [];
}

const PostList = ({ posts }: IProps) => {
  return (
    <>
      <h2>posts Layout </h2>
      <Suspense fallback={<ProductSkeleton />}>
        <div className="m-5">
          {posts.map(({ id, title }: { id: number; title: string }) => (
            <div key={id}>
              <Link href={`/posts/${id}`}>
                {id} - {title}
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default PostList;
