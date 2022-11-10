import React, { useContext, useState } from "react";
import { useNavigate, Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import UserReview from "../userreview/UserReview";
import TabTitle from "../../../utils/generalfunction";

const ServiceDetails = () => {
  TabTitle("zamilFits-service");
  const service = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState();
  const [reviews, setReviews] = useState([]);
  const { image, _id, name, rating, price, description } = service.data;
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch(`https://zamilfits-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // toast.success(data.message);
          console.log(data.data);
          setReviews(data.data);
        } else {
          // toast.error(data.error);
        }
      })
      .catch((err) => {
        // toast.error(err.message);
      });
  }, [_id]);

  const handleReview = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    console.log(message);
    // console.log(user.displayName, user.photoURL, message);

    if (user && user.uid) {
      const token = localStorage.getItem("token");

      fetch("https://zamilfits-server.vercel.app/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          review: message,
          service: _id,
          reviewer: {
            name: user.displayName,
            photo: user.photoURL,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // toast.success(data.message);
            setReview(data.data.review);
            console.log(data);
          } else {
            // toast.error(data.error);
          }
        })
        .catch((err) => {
          // toast.error(err.message);
        });
    } else {
      navigate("/login");
    }
    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center  m-3">
      <div className="card w-96 bg-base-100 shadow-xl mb-3 ">
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
      <form onSubmit={handleReview}>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
          required
        ></textarea>

        <input className="btn" type="submit" value="Place Your Review" />
      </form>

      {review && <UserReview review={review} />}

      {reviews.length &&
        reviews.map((review) => (
          <UserReview review={review} key={review._id} />
        ))}
    </div>
  );
};

export default ServiceDetails;
