import React, { useEffect } from "react";
import { BsCupHot } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router";

const Hero = () => {
  
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    })
  }, [])

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img data-aos="flip-right"
            src="https://i.ibb.co/YTWC4JL8/cuffe-Image.jpg"
            className="w-full relative h-[800px] object-cover"
          />
          <div data-aos = "slide-right" className="absolute text-yellow-300 px-5 md:px-0 md:left-40 lg:left-80 top-[200px]">
              <h2 className=" text-4xl md:text-6xl">Coffee Crate</h2>
              <h1 className="font-semibold text-6xl md:text-7xl py-3">Subscriptions</h1>
              <p className="py-4">New: Coffee Experiences All Over The World</p>
              <div className=" flex items-center pt-14 md:pt-0 gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>100% Satisfaction Guarantee</p>
              </div>
              <div className=" flex items-center gap-2 py-1">
              <BsCupHot className="text-white" size={22}/>
              <p>World-Class Selected Coffee's</p>
              </div>
              <div className=" flex items-center gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>Get Your Monthly Coffee Crates Now</p>
              </div>
              <Link to="/coffeeSubscriptions"><button className="btn mt-6 md:mt-14  px-9">START</button></Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
           src="https://i.ibb.co/99KjKgXc/cuffe-Image-3.jpg"
            className="w-full h-[800px] object-cover"
          />
             <div className="absolute text-yellow-300 px-5 md:px-0left-80 top-[200px]">
              <h2 className=" text-4xl md:text-6xl">Coffee Crate</h2>
              <h1 className="font-semibold text-6xl md:text-7xl py-3">Subscriptions</h1>
              <p className="py-4">New: Coffee Experiences All Over The World</p>
              <div className=" flex items-center pt-14 md:pt-0 gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>100% Satisfaction Guarantee</p>
              </div>
              <div className=" flex items-center gap-2 py-1">
              <BsCupHot className="text-white" size={22}/>
              <p>World-Class Selected Coffee's</p>
              </div>
              <div className=" flex items-center gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>Get Your Monthly Coffee Crates Now</p>
              </div>
              <button className="btn mt-6 md:mt-14  px-9">START</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Wv75K3Zp/cuffe-Image-5.jpg"
            className="w-full h-[800px] object-cover"
          />
             <div className="absolute text-yellow-300 px-5 md:px-0left-80 top-[200px]">
              <h2 className=" text-4xl md:text-6xl">Coffee Crate</h2>
              <h1 className="font-semibold text-6xl md:text-7xlpy-3">Subscriptions</h1>
              <p className="py-4">New: Coffee Experiences All Over The World</p>
              <div className=" flex items-center pt-16 md:pt-0 gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>100% Satisfaction Guarantee</p>
              </div>
              <div className=" flex items-center gap-2 py-1">
              <BsCupHot className="text-white" size={22}/>
              <p>World-Class Selected Coffee's</p>
              </div>
              <div className=" flex items-center gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>Get Your Monthly Coffee Crates Now</p>
              </div>
              <button className="btn mt-6 md:mt-14  px-9">START</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
           src="https://i.ibb.co/4GvfsSt/cuffe-Image-6.jpg"
            className="w-full h-[800px] object-cover"
          />
             <div className="absolute text-yellow-300 px-5 md:px-0left-80 top-[200px]">
              <h2 className=" text-4xl md:text-6xl">Coffee Crate</h2>
              <h1 className="font-semibold text-6xl md:text-7xl py-3">Subscriptions</h1>
              <p className="py-4">New: Coffee Experiences All Over The World</p>
              <div className=" flex items-center pt-14 md:pt-0 gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>100% Satisfaction Guarantee</p>
              </div>
              <div className=" flex items-center gap-2 py-1">
              <BsCupHot className="text-white" size={22}/>
              <p>World-Class Selected Coffee's</p>
              </div>
              <div className=" flex items-center gap-2">
              <BsCupHot className="text-white" size={22}/>
              <p>Get Your Monthly Coffee Crates Now</p>
              </div>
              <button className="btn mt-6 md:mt-14 px-9 hover:bg-yellow-400 hover:text-white">START</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


