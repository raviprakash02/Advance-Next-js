"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h3 key={item.id}>
          Product Name: {item.title}, Price: ${item.price}
        </h3>
      ))}
    </div>
  );
}
