import React from "react";
import Marquee from "react-fast-marquee";

const CoffeeSubscriptions = () => {
  return (
    <div className="md:w-7/12 lg:w-10/12 mx-auto  my-16">
      <div className="w-9/12 mx-auto">
        <Marquee speed={30}>
        {" "}
        <h1 className="font-bold md:text-2xl lg:text-5xl text-center">
          Start Your Coffee Subscriptions
        </h1>
      </Marquee>
      </div>
      <p className="text-center">New Monthly Boxes From All Over The World</p>
      <div className="lg:flex px-5 md:px-0 mt-6 justify-center">
        <div data-aos="fade-up" data-aos-duration="3000">
          <h2 className="font-semibold text-2xl pb-3">From Four Continutes</h2>
          <p className="pb-10">
            <li>Artisan mug</li>
            <li>Coffee scoop</li>
            <li>Reusable filter</li>
            <li>Coasters</li>
          </p>
          <h2 className="font-semibold text-2xl pb-3">Monthly Subscription</h2>
          <p className="pb-10">
            <li>
              <span className="font-bold">Africa</span> – Ethiopian coffee or
              Moroccan spices
            </li>
            <li>
              <span className="font-bold">Asia</span> – Japanese matcha or
              Indian masala
            </li>
            <li>
              <span className="font-bold">Europe</span> – Italian olive oil or
              Belgian chocolate South
            </li>
            <li>
              <span className="font-bold">America</span> – Colombian beans or
              Brazilian sweets
            </li>
          </p>
          <h2 className="font-semibold text-2xl pb-3">
            6 Accessories Included
          </h2>
          <p className="pb-10">
            <li>☕ Coffee Mug Handcrafted mug from Peru</li>
            <li>🧴 Syrup or Sweetener Vanilla syrup from France</li>
            <li>🪵 Coaster Bamboo coaster from Thailand</li>
            <li>🎨 Coffee Art Card Artist-designed coffee-themed postcard</li>
            <li>
              🧹 Cleaning Brush Eco-friendly brush for your coffee grinder
            </li>
            <li>🧦 Themed Bonus "Coffee Socks", enamel pin, or small pouch</li>
          </p>
        </div>
        <img
          data-aos="fade-down"
          data-aos-duration="3000"
          className="px-10"
          src="https://i.postimg.cc/rFCNjfjJ/coffee-Image.webp"
          alt=""
        />
        <div data-aos="fade-up" data-aos-duration="3000">
          <h2 className="font-semibold text-2xl pb-3">Member’s Fav Product</h2>
          <p className="pb-10">
            <li>🌟 Product: Ethiopian Yirgacheffe Coffee</li>
            <li>📍 Origin: Africa</li>
            <li>🍋Floral aroma with hints of citrus </li>
            <li>Smooth body and clean finish</li>
            <li>Perfect for pour-over lovers!</li>
            <li>Tasting guide</li>
            <li>Brewing tips</li>
          </p>
          <h2 className="font-semibold text-2xl pb-3">One Day Shipping</h2>
          <p className="pb-10">
            <h1>✅ Feature Highlights:</h1>
            <li>
              📦 Fast delivery on{" "}
              <span className="font-bold">Member’s Fav Product</span> or{" "}
              <span className="font-bold">Add-ons</span>
            </li>
            <li>
              🌐 Available in major metro areas (e.g., New York, London, Dhaka)
            </li>
            <li>
              🕒 Orders placed before <span className="font-bold">2 PM</span>{" "}
              are shipped <span className="font-bold">same-day</span>
            </li>
          </p>
          <h2 className="font-semibold text-2xl pb-3">All For 12 Dollars</h2>
          <p className="pb-10">
            <h1>🧾 What's Included for Just $12:</h1>
            <li>☕ 4 Global Coffee Samples (from 4 continents)</li>
            <li>🎁 6 Coffee Accessories</li>
            <li>🚚 1-Day Shipping (available in select regions)</li>
            <li>📝 Flavor Cards & Brewing Tips</li>
            <li>🌱 Eco-Friendly, Gift-Ready Packaging</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSubscriptions;
