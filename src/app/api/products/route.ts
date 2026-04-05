export const dynamic = 'force-dynamic'
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=150", {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  const products = await res.json()

  return NextResponse.json(products);
}
