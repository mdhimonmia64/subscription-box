import React from "react";

const AboutCoffee = () => {
  return (
    <div className="w-8/12 mx-auto lg:flex justify-between md:px-6 my-20 ">
      <img className="w-[300px] md:w-[500px] rounded-3xl" src="/public/about-coffee.jpg" alt="" />
      <div>
        <h1 className="text-4xl py-14">All About <span className="text-amber-300">Coffee Crate</span></h1>
        <p>
          5 Wonderful beauty treats, lovingly wrapped and delivered <br /> to their
          door. TheCrate gift vouchers are perfect, quick, and simple <br /> solutions
          for birthdays celebration. Delivering you door without having <br /> every
          time something.
        </p>
        <button className="btn bg-zinc-500 text-white mt-10">JOIN THECRATE FAMILY</button>
      </div>
    </div>
  );
};

export default AboutCoffee;
