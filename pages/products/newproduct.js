import Layout from "@/components/Layout/Layout";
import { useState } from "react";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [descript, setDescript] = useState("");
  const [price, setPrice] = useState("");
  const createProduct = async () => {
    const data = { title, descript, price };
    await axios.post("/api/products", data);
  };
  return (
    <>
      <Layout>
        <form onSubmit={createProduct}>
          <h1>New Product</h1>
          <br />
          <br />

          <br />
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <br />
          <br />
          <textarea
            placeholder="Product Description"
            value={descript}
            onChange={(ev) => setDescript(ev.target.value)}
          />
          <input
            type="number"
            placeholder="Product price"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </Layout>
    </>
  );
}
