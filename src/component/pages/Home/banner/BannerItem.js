import React from "react";
// import './BannerItem.css';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className=" font-bold text-white sm:text-4xl md:text-6xl">
          Hey!
          <br />
          I'M ZAMIL
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-2/4">
        <p className="text-xl text-white hidden md:block ">
          "if it doesn't challange you. it won't change you".It is my selgon and
          i will help you be the best you can be.I am shafayat zamil.I have been
          fitness Trainer since 2010,
          <br />
          Fitness,Health,and Lifestyle Influencer
        </p>

        <p className="text-xl text-white md:hidden lg:hidden  ">
          {" "}
          A Gym trainer{" "}
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2 ">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
