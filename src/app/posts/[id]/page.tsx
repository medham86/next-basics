import ProductSkeleton from "@/components/ProductSkeleton";
import { Suspense } from "react";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProps {
  params: { id: string };
}

const page = async ({ params: { id } }: IProps) => {
  const post = await getData(id);

  const { title, body } = post;

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <div>
        <h2>{title}</h2>
        <h2>{body}</h2>
       
        
      </div>
    </Suspense>
  );
};

export default page;
