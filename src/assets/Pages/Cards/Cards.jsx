import React from "react";
import { FcRight } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { useNavigate } from "react-router";


const Cards = ({ coffeeCard }) => {
    const navigate = useNavigate();
    const{name,banner,features,frequency,price ,tech_category} = coffeeCard || { };
  return ( 
    <div className="card bg-base-100 shadow-sm hover:shadow-gray-600 hover:shadow-2xl">
      <figure>
        <img className="w-full h-[200px] object-cover"
          src={banner}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{frequency}</div>
        </h2>
        <p>category : <span className="font-semibold">{tech_category}</span></p>
        <div className="font-semibold">
            <div className="flex items-center gap-2">
                <FcRight size={18}/>
            <p>{features[0]}</p>
            </div>
            <div className="flex items-center gap-2">
                <FcRight size={18}/>
            <p>{features[1]}</p>
            </div>
            <div className="flex items-center gap-2">
                <FcRight size={18}/>
            <p>{features[2]}</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <FcCurrencyExchange size={22}/>
            <p>$ {price}</p>
        </div>
        <button onClick={()=>navigate(`/cardDetails/${coffeeCard.id}`)}
         className="btn btn-primary tooltip hover:animate-bounce"
         data-tip="Details button"
         >View More</button>
      </div>
    </div>
  );
};

export default Cards;
