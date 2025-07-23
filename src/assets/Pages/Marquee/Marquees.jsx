import React, { use } from "react";
import Marquee from "react-fast-marquee";
const categoryPromise = fetch("/data.json").then((res) => res.json());

const Marquees = () => {
  const categories = use(categoryPromise);
  return (
    <div>
    <div className="w-10/12 mx-auto my-20">
      <Marquee pauseOnHover="true" speed={35}>
        <div className="flex gap-5">
          {categories.map((category,index) => (
            <div key={index}>
              <img
                className="w-24 h-14 lg:w-44 lg:h-20 object-cover rounded"
                src={category.banner}
                alt=""
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
    </div>
  );
};

export default Marquees;
