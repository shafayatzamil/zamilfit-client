import React from "react";
import { toast, ToastContainer } from "react-toastify";

const AddServices = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const service = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: parseInt(e.target.price.value),
      rating: parseInt(e.target.rating.value),
      description: e.target.description.value,
    };

    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
    console.log(service);
  };

  return (
    <div className="py-32 px-10 min-h-screen w-full">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Service Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-10">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="url"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating out of 5"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">
              Add
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
