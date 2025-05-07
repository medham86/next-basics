import PostList from "@/components/PostList";


async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");
 

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProps {}

const page = async({}: IProps) => {
  const data = await getData();
  const {posts} = data
  
  return (
  
   <PostList posts={posts} />
   
  )
};

export default page;
