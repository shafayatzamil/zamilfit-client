import React from "react";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  const { image, _id, name, rating, price, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      {/* <figure className="h-40 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover rounded-sm"
        />
      </figure> */}
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-sm ">{name.toUpperCase()}</h2>
        <p className="text-gray-500 text-sm">{description.slice(0, 80)}...</p>

        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
      <div className="flex justify-evenly pb-5">
        <div> price:${price}</div>
        <div>Rating:{rating}⭐</div>
      </div>
    </div>
  );
};

export default Card;
