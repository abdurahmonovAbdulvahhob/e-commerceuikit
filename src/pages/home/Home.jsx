import React, { useEffect, useState } from "react";
import axios from "../../api";
import Products from "../../components/products/Products";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="home">
      <Hero/>
      <Products data={data?.products}/>
    </div>
  );
};

export default Home;
