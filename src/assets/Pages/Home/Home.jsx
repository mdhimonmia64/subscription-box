import React from 'react';
import Hero from '../Hero/Hero';
import AboutCoffee from '../AboutCoffee/AboutCoffee';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router';
import CoffeeSubscriptions from '../CoffeeSubscriptions/CoffeeSubscriptions';
import Marquees from '../Marquee/Marquees';
import Marquee from 'react-fast-marquee';


const Home = () => {

    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <AboutCoffee></AboutCoffee>
            <div>
                <div className="w-7/12 md:w-6/12 lg:w-4/12 mx-auto">
                <Marquee>
                    <h1 className='font-bold md:text-3xl lg:text-4xl text-center my-5'>Choose a Subscription Crate</h1>
                </Marquee>
                </div>
                <p className='text-center pb-3'>Subscribe to our month crates</p>
                <div className='w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(coffeeCard => <Cards key={coffeeCard.id} coffeeCard={coffeeCard}></Cards>)
                }
            </div>
            </div>
            <Marquees></Marquees>
            <CoffeeSubscriptions></CoffeeSubscriptions>
        </div>
    );
};

export default Home;