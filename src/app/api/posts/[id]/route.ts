import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const data = await (
    await fetch(`https://dummyjson.com/posts/${id}`)
  ).json();

  return NextResponse.json(data);
}