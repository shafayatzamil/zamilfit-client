import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service.data);

  const { image, _id, name, rating, price, description } = service.data;

  return (
    <div className="flex justify-center m-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-evenly pb-5">
            <div className="text-2xl font- semibold"> price:${price}</div>
            <div className="text-xl font- semibold">Rating:{rating}⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
