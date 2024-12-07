import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/not-found/NotFound";
import Wishes from "../pages/wishes/Wishes";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";
import Detail from "../pages/detail/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/wishlist" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/product/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Router;
