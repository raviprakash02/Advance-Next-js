export default async function Page2() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h3>Name: {item.title}</h3>
        </div>
      ))}
    </div>
  );
}
