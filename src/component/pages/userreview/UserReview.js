import React from "react";
import userImage from "../../../assets/images/userimage1.jpg";

const UserReview = ({ review }) => {
  return (
    <div className="grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight">
      <figure className="row-span-2 h-12 w-12">
        <img src={userImage} alt="" className="h-12 w-12" />
      </figure>
      <h4 className="text-xl">{review.reviewer.name}</h4>
      <p className="text-lg text-gray-500">{review.review}</p>
    </div>
  );
};

export default UserReview;
