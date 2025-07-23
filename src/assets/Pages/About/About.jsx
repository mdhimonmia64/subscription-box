import React from "react";

const About = () => {
  return (
    <div>
      <img
        className="w-full h-[200px] md:h-[400px]  lg:h-[500px] object-cover"
        src="https://i.postimg.cc/0rRT3Hxk/shop.jpg"
        alt="This is shop image"
      />
      <div className="w-10/12 mx-auto">
        <h1 className="text-5xl font-semibold text-center py-6">
          Subscriptions
        </h1>
        <p className="text-center">
          Starting a coffee shop business requires careful planning and
          execution, from choosing the right location and concept to managing
          daily operations and marketing. A well-defined business plan, a strong
          understanding of the market, and a commitment to quality are crucial
          for success in this competitive industry.{" "}
        </p>
        <p className="font-semibold py-1">
          Here's a more detailed look at key aspects of starting a coffee shop
          business:
        </p>
        <div>
          <div>
            <h1 className="font-bold">1. Planning and Preparation:</h1>
            <h1 className="font-bold py-3">Develop a Business Plan:</h1>
            <p>
              A comprehensive business plan is essential for outlining your
              vision, target market, menu, marketing strategy, and financial
              projections.{" "}
            </p>
            <h1 className="font-bold py-3">Secure Funding:</h1>
            <p>
              Determine your funding needs and explore options like loans,
              investors, or personal savings.
            </p>
            <h1 className="font-bold py-3">Select a Location:</h1>
            <p>
              Choose a location with high foot traffic, good visibility, and
              easy accessibility.{" "}
            </p>
            <h1 className="font-bold py-3">Create a Floor Plan:</h1>
            <p>
              Design a layout that optimizes customer flow, staff workflow, and
              the overall customer experience.{" "}
            </p>
            <h1 className="font-bold py-3">Source Suppliers:</h1>
            <p>
              Find reliable suppliers for coffee beans, equipment, ingredients,
              and other supplies.{" "}
            </p>
          </div>
          <div>
            <img className="py-4"
              src="https://i.postimg.cc/vTYg9Mc9/DSC-0052-scaled.webp"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold">2. Key Operational Aspects:</h1>
          <h1 className="font-bold">Menu Development:</h1>
          <p>
            Create a menu that aligns with your concept, appeals to your target
            market, and offers a variety of beverages and food items.{" "}
          </p>
          <h1 className="font-bold">Quality Control:</h1>
          <p>
            Ensure high-quality ingredients and preparation methods to deliver
            consistent and delicious coffee.{" "}
          </p>
          <h1 className="font-bold">Customer Service:</h1>
          <p>
            Provide excellent customer service, creating a welcoming and
            enjoyable atmosphere.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
