import Link from "next/link";
import { Suspense } from "react";
import ProductSkeleton from "./ProductSkeleton";

interface IProps {
  products: [];
}

const ProductList = ({ products }: IProps) => {
  return (
    <>
      <h2>Products Layout </h2>
      <Suspense fallback={<ProductSkeleton />}>
        <div className="m-5">
          {products.map(({ id, title }: { id: number; title: string }) => (
            <div key={id}>
              <Link href={`/products/${id}`}>
                {id} - {title}
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default ProductList;
