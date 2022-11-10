import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";

const MyServiceCard = () => {
  const [homePageService, setHomePageService] = useState([]);
  useEffect(() => {
    fetch("https://zamilfits-server-shafayatzamil.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setHomePageService(data.data));
  }, []);
  return (
    <div className="col-span-1 md:col-span-8 grid gap-8 mb-14 relative">
      <h1 className="text-4xl text-center text-red-400">HERE IS MY SERVICE</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-5">
        {homePageService.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
      <Link to="/service">
        <button className="btn  btn-secondary absolute right-5 ">
          see all
        </button>
      </Link>
    </div>
  );
};

export default MyServiceCard;
