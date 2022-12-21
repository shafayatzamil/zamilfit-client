import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServices from "../../../../hooks/useServices";
import Card from "../card/Card";

const MyServiceCard = () => {
  // const [homePageService, setHomePageService] = useState([]);
  // useEffect(() => {
  //   fetch("https://zamilfits-server-shafayatzamil.vercel.app/p-users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setHomePageService(data.data);
  //       console.log(data.data);
  //     });
  // }, []);
  const [allservice, setAllService, loading] = useServices();

  let reversed = [];

  for (let i = allservice.length - 1; i >= 0; i--) {
    reversed.push(allservice[i]);
  }
  // console.log(reversed);

  return (
    <div className="col-span-1 md:col-span-8 grid  gap-8 mb-14 relative">
      <h1 className="text-4xl text-center text-white bg-rose-300 p-2 ">
        MY SERVICE
      </h1>
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-green-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-3 gap-3">
            {reversed.slice(0, 3).map((service) => (
              <Card key={service._id} service={service} />
            ))}
          </div>
        )}
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
