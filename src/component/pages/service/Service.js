import React, { useEffect, useState } from "react";
import Card from "../Home/card/Card";

const Service = () => {
  const [allservice, setAllService] = useState([]);
  useEffect(() => {
    fetch("https://zamilfits-server-shafayatzamil.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setAllService(data.data));
  }, []);

  return (
    <div className="col-span-1 md:col-span-8 grid gap-8 mb-14">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-5">
        {allservice.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
