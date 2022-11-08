import React from "react";
import icons1 from '../../../../assets/images/icons1.png';
import icons2 from '../../../../assets/images/icons2.png';
import icons3 from '../../../../assets/images/icons3.png';
const Traingoffer = () => {
  return (
    <div className="flex flex-row my-6">
    <div class="flex flex-row p-5 h-56 bg-red-100 mb-10 rounded-lg m-4">
    <div class="basis-1/4 md:basis-1/3">
        <img src={icons1}  className="w-12" alt="" />
        <h3 className="text-2xl font-semibold">Private session</h3>
        <p className="texl-xl  text-slate-600 w-3/4 ">my create personal training program where all bodies can move</p>
      </div>
      <div class="basis-1/4 md:basis-1/3">
      <img src={icons2} className="w-12" alt="" />
        <h3 className="text-2xl font-semibold">Group class</h3>
        <p className="texl-xl  text-slate-600 w-3/4 ">we offer an array of different group fitness class type</p>
      </div>
      <div class="basis-1/2 md:basis-1/3">
      <img src={icons3}  className="w-12"alt="" />
        <h3 className="text-2xl font-semibold">Program & Diet</h3>
        <p className="texl-xl  text-slate-600 w-3/4 ">you need to begin of thinking amount of protein</p>
      </div>

    </div>

      <div className="m-4">
        <h3 className="text-4xl font-semibold">Training <br /> Programs <br /> offer for you </h3>
        <p className="texl-xl  text-slate-600 w-3/4 ">Starting a fitness routine  can be intimidating.but it helps to have  an idea  of what to expect before joining any class.</p>
      </div>

    </div>
  );
};

export default Traingoffer;
