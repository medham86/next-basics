import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECommerce | Products",
  description: "",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
