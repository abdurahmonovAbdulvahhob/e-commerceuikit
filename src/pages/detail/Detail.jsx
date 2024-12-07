import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [able,setAble] = useState(false)
  const {setCart, cart} = useStateValue();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);
  if (loading) {
    return (
      <div className="text-center py-24">
        <p>loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-24">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  const handleAddToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...product, amount: 1 }]);
      setAble(true)
    } else {
      setCart((prev) => prev.filter((item) => item.id !== product.id));
      setAble(false)
    }
  };

  return (
    <div className="container py-5 grid grid-cols-2">
      <div className="flex flex-col my-20">
        <div className="flex-1">
          <img className="w-[70%] mx-auto" src={data?.images[index]} alt="" />
        </div>
        <div className="flex gap-2 justify-evenly">
          {data?.images?.map((url, inx) => (
            <img
              onClick={() => setIndex(inx)}
              className={`w-24 ${index === inx ? "border" : ""}`}
              src={url}
              key={inx}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="my-20 mx-auto p-4">
        <div className="md:pl-8 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-gray-800">{data?.title}</h2>
          <p className="text-green-700 text-xl font-semibold mt-2">
            ${data?.price}
          </p>

          <div className="mt-4">
            <label className="block">
              <input
                type="radio"
                name="purchaseType"
                value="one-time"
                className="mr-2"
                defaultChecked
              />
              One-time purchase
            </label>
            <label className="block mt-2">
              <input
                type="radio"
                name="purchaseType"
                value="subscription"
                className="mr-2"
              />
              Subscribe and delivery every
              <select className="ml-2 border rounded-md p-1">
                <option>4 weeks</option>
                <option>8 weeks</option>
              </select>
            </label>
            <p className="text-sm text-gray-600 mt-2">
              Subscribe now and get 10% off on every recurring order. The
              discount will be applied at checkout.{""}
              <p className="text-green-700 underline inline">See details</p>.
            </p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mt-6 space-x-4">
            <button
              onClick={() => handleAddToCart(data)}
              className={`${
                able
                  ? "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 active:bg-red-800"
                  : "bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 active:bg-green-700"
              }`}
            >
              {able ? "Remove from cart" : "+ Add to cart"}
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-6 bg-gray-100 p-4 rounded-md">
            <p className="text-gray-700">
              <strong>Wax:</strong> {data?.description}
            </p>
            <p className="text-gray-700">
              <strong>Brand:</strong> {data?.brand}
            </p>
            <p className="text-gray-700">
              <strong>Burning Time:</strong> 70-75 hours
            </p>
            <p className="text-gray-700">
              <strong>Dimensions:</strong>{" "}
              {`${data?.dimensions.width}sm x ${data?.dimensions.height}sm`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
