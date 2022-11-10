import React, { useEffect, useState } from "react";
import Card from "../Home/card/Card";

const Service = () => {
  const [allservice, setAllService] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://zamilfits-server-shafayatzamil.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        setAllService(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="col-span-1 md:col-span-8 grid gap-8 mb-14">
      <div className="grid grid-cols-3 gap-5">
        {loading ? (
          <div className="radial-progress" style={{ "--value": 70 }}>
            70%
          </div>
        ) : (
          allservice.map((service) => (
            <Card key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default Service;
