import React from "react";
import About from "../about/About";
import Banner from "../banner/Banner";
import MyServiceCard from "../myservicecard/MyServiceCard";
import Traingoffer from "../trainingoffer/Traingoffer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Traingoffer />
      <About />
      <MyServiceCard />
    </div>
  );
};

export default Home;
