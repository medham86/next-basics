import Button from "@/components/Button";
import ProductSkeleton from "@/components/ProductSkeleton";
import Image from "next/image";
import { Suspense } from "react";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProps {
  params: { id: string };
}

/////////////////////////////////////////////////////////////////////////////////////////////////

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const {title , description , thumbnail , images} = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title,
    description,
    openGraph: {
      images,
    },
  };
}

/////////////////////////////////////////////////////////////////////////////////////////////////

const page = async ({ params: { id } }: IProps) => {
  const product = await getData(id);

  const { title, description, thumbnail } = product;

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <div>
        <h2>{title}</h2>
        <h2>{description}</h2>
        <Image src={thumbnail} alt="title" width={500} height={500} />
        <Button text={"Add to Cart"} />
      </div>
    </Suspense>
  );
};

export default page;
