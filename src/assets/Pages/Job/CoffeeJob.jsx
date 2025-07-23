import React from 'react';

const CoffeeJob = () => {
    return (
        <div>
            <img className="w-full h-[200px] md:h-[400px]  lg:h-[600px] object-cover" src="https://i.postimg.cc/Bb2CMJgv/image5.jpg" alt="" />
            <div className='w-8/12 mx-auto py-4'>
                <h1 className='font-semibold text-4xl text-center'>Jobs of Coffee Shop</h1>
                <p className='text-center'>A job in a coffee shop can encompass various roles, from preparing and serving coffee (barista) to managing the entire  establishment (manager). Other potential<br /> positions include sales assistant, customer assistant, chef, and administrative roles. </p>
                <div>
                    <h1 className='font-bold'>Job Roles in a Coffee Shop:</h1>
                    <h1 className='font-bold py-3'>Barista:</h1>
                    <p>Primarily responsible for preparing and serving coffee and espresso-based drinks, <br /> as well as other beverages. They also engage with customers,<br /> provide service, and maintain a clean environment. </p>
                    <h1 className='font-bold'>Coffee Shop Manager:</h1>
                    <p>Oversees daily operations, including staff management,<br /> inventory control, and ensuring quality standards. </p>
                    <h1 className='font-bold'>Sales Assistant:</h1>
                    <p>Focuses on customer service, assisting customers with <br /> purchases and creating a welcoming atmosphere. </p>
                    <h1 className='font-bold'>Customer Assistant:</h1>
                    <p>Similar to a sales assistant, this role involves interacting <br /> with customers and providing assistance. </p>
                    <h1 className='font-bold'>Chef:</h1>
                    <p>In some coffee shops, chefs may be responsible for preparing <br /> food items, potentially including breakfast, lunch, and baked goods. </p>
                    <h1 className='font-bold'>Administrative Assistant:</h1>
                    <p>May handle tasks such as scheduling, record-keeping, and other <br /> office-related duties. </p>
                    <h1 className='font-bold'>Social Media Manager:</h1>
                    <p>Responsible for managing the coffee shop's online presence and <br /> engaging with customers through social media platforms. </p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeJob;