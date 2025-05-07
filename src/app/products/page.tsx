import ProductList from "@/components/ProductList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/products");
 

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProps {}

const page = async({}: IProps) => {
  const data = await getData();
  const {products} = data
  
  return (

    <div className="ml-10 container">
      <ProductList products={products} />

    </div>
  
   
  )
};

export default page;
