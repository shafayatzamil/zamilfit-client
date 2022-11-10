import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("https://zamilfits-server-shafayatzamil.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
          console.log(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`https://zamilfits-server-shafayatzamil.vercel.app/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleEdit = (id) => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>service id</th>
              <th>Review</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
                <td>{review.service}</td>
                <td>{review.review}</td>
                <td>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                      Click
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <button
                        className="btn btn-outline"
                        onClick={() => handleEdit(review._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline"
                        onClick={() => handleDelete(review._id)}
                      >
                        Delete
                      </button>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
