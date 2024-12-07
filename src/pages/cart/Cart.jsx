import React, { useEffect } from "react";
import { useStateValue } from "../../context";
import Empty from "../../components/empty/Empty";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useStateValue();
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleIncrement = (product) => {
    console.log(product);
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDescrement = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              amount: item.amount > 1 ? item.amount - 1 : item.amount,
            }
          : item
      )
    );
  };

  const handleDelete = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const totalPrice = cart?.reduce((sum, item) => sum + item.price * item.amount, 0)

  return (
    <section className="min-h-[60vh]">
      <div className="container">
        {cart.length ? (
          <div className="flex gap-4">
            <div className="flex-1">
              {cart?.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex p-2 my-10 shadow-lg items-center justify-around"
                >
                  <img src={item.thumbnail} width={80} alt="" />
                  <div>
                    <h3 className="tracking-tighter overflow-hidden text-xl whitespace-nowrap hover:text-[#56B280]">
                      {item.title}
                    </h3>
                    <p className="text-[#56B280] leading-5 hover:text-[#34a853] font-semibold">
                      {(item.amount * item.price)?.brm()}$
                    </p>
                    <button
                      className="text-[#34a853] hover:text-red-500"
                      onClick={() => handleDelete(item)}
                    >
                      delete
                    </button>
                  </div>
                  <div className="border w-20 flex h-9 items-center rounded-md justify-between">
                    <button
                      disabled={item.amount <= 1}
                      onClick={() => handleDescrement(item)}
                      className="flex-1"
                    >
                      -
                    </button>
                    <span>{item.amount}</span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="flex-1"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-96 shadow-lg p-4 h-72 sticky top-20 mt-5 text-center">
              <p className="text-2xl font-semibold">Buyurtmangiz:</p>
              <p className="mt-3">
                Total: <span className="font-medium">{totalPrice.brm()}$</span>
           
              </p>
              <button onClick={() => navigate("/checkout")} className="mt-3 py-2 px-4 bg-[#56B280] text-white transition-transform duration-300 hover:scale-105 active:bg-green-700">
                Check out
              </button>
            </div>
          </div>
        ) : (
          <Empty
            title="Savatingiz hozircha bo‘sh"
            url="https://uzum.uz/static/img/shopocat.490a4a1.png"
          />
        )}
      </div>
    </section>
  );
};

export default Cart;
