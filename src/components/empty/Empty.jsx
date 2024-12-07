import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({ title, url }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <img className="w-[30%] mx-auto" src={url} alt="" />
      <p>{title}</p>
      <button className="bg-slate-400 mt-2 px-3 py-2 rounded-lg" onClick={() => navigate("/")}>Go home</button>
    </div>
  );
};

export default Empty;
