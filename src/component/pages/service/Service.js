import React, { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import Card from "../Home/card/Card";

const Service = () => {
  // const [allservice, setAllService] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://zamilfits-server-shafayatzamil.vercel.app/service")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllService(data.data);
  //       setLoading(false);
  //     });
  // }, []);
  const [allservice, setAllService, loading] = useServices();

  return (
    <div className="col-span-1 md:col-span-8 grid gap-8 mb-14">
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-green-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-3 gap-3">
            {allservice.map((service) => (
              <Card key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
