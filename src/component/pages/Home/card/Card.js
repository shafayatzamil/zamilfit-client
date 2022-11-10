import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const Card = ({ service }) => {
  const { image, _id, name, rating, price, description } = service;
  // const id =_id;
  return (
    <div className="card w-96 bg-base-100 shadow-xl bg-red-100">
      <PhotoProvider>
        <PhotoView src={image}>
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl h-52" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-2xl ">{name.toUpperCase()}</h2>
        <p className="text-gray-500 text-sm">{description.slice(0, 80)}...</p>
      </div>
      <div className="flex justify-evenly pb-5">
        <div> price:${price}</div>
        <div>Rating:{rating}⭐</div>
      </div>
      <Link to={`/service/${_id}`}>
        <div className="card-actions justify-end pb-5 pr-5">
          <button className="btn btn-info">View details</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
