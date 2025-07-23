import React, { useEffect } from "react";
import { FcCurrencyExchange, FcRight } from "react-icons/fc";
import { Link, useLoaderData, useParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleData = data.find((detailsData) => detailsData.id == id);
  const {
    name,
    banner,
    description,
    features,
    frequency,
    price,
    tech_category,
    number_of_reviews,
    ratings,
    subscription_benefits,
  } = singleData || {};


  useEffect(()=>{
    AOS.init({
        duration:1500,
        once:true
    });
  }, [])

  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img data-aos="fade-down"
              src={banner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div data-aos="fade-up" className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {name}
            </h1>
            <p className="mt-6 mb-2 text-lg sm:mb-12">{description}</p> 
            <p className="flex justify-items-start"> Category : <span className="font-bold">{tech_category}</span></p>
            <div className="font-semibold">
              <div className="flex items-center gap-2">
                <FcRight size={18} />
                <p>{features[0]}</p>
              </div>
              <div className="flex items-center gap-2">
                <FcRight size={18} />
                <p>{features[1]}</p>
              </div>
              <div className="flex items-center gap-2">
                <FcRight size={18} />
                <p>{features[2]}</p>
              </div>
            </div>
             <div className="font-semibold my-2">
              <div className="flex items-center gap-2">
                <FaCheckCircle size={18}/>
                <p>{subscription_benefits[0]}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle size={18}/>
                <p>{subscription_benefits[1]}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle size={18}/>
                <p>{subscription_benefits[2]}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FcCurrencyExchange size={22} />
              <p>$<span className="font-bold">{price}</span></p>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-7">
             <Link to="/"><button className="btn btn-primary"><GoArrowLeft size={22}/>Go back Home</button></Link>
             <button className="btn btn-primary">Malesuada</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
