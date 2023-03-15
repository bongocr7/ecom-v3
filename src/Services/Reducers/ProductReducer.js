import { useState } from "react";

const url = "http://localhost:3000/products";
const [products, setProducts] = useState([]);

async function getProduct() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  setProducts(getProduct());
}, []);

const productReducer = (state = products, action) => {};

export default productReducer;
