import React from "react";
import trainer from "../../../../assets/images/trainer.jpg";

const About = () => {
  return (
    <div className="hero min-h-max bg-base-200 my-8 ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-1/3 ">
          {" "}
          <img
            src={trainer}
            className="hidden md:block max-w-sm rounded-lg shadow-2xl h-fit"
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-5xl font-bold text-slate-700">About</h1>
          <h1 className="text-5xl font-bold text-slate-700">Zamil Trainer</h1>
          <p className="py-6 text-slate-600 w-3/4">
            With the release of letraset sheet containing ipsum passenger and
            more recently with desktop publishing software like Aldus pageMaker
            including versions
            <br />I approach our Projects with strategic and create thinking. we
            partner with our clients to create big ideas and digital
            experience.And we spend each day doing so by sharpening the tools of
            the digital trade
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
