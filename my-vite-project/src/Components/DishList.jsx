import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {retrievesDishes} from './DishSlice.jsx';

import './style.css';


const Dishes = () => {

    const dispatch = useDispatch();

    /*useSelector retrieves the state, and useDispatch changes the state */
    const {dishItems: dishes, status, error} = useSelector(state => state.dishes);

    // const [dishGot, setDishGot] = useState({});

    console.log("I'm in the list page");

      useEffect(() => {
        console.log("I'm in the useEffect");
        dispatch(retrievesDishes());
      }, []);


    return(
        <>
          <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6 w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img className="fill-current h-20 w-20 mr-2" width="54" height="54" viewBox="0 0 54 54" src="../../public/rexKitchen.png"></img>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-start lg:w-auto">
              <div className="text-m lg:flex-grow">
                <a href="#responsive-header" className=" mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Home
                </a>
                <a href="/" className=" mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Menu
                </a>
                <a href="/dishes" className=" mt-4  lg:mt-0 text-white cursor-not-allowed mr-4">
                  Dishes
                </a>
                <a href="#responsive-header" className=" mt-4  lg:mt-0 text-teal-200 hover:text-white">
                  Login
                </a>
              </div>
              <div>
                <a href="#" className="inline-block text-sm px-6 py-4 leading-none border rounded-[50%] text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0">Order Now</a>
              </div>
            </div>
          </nav>


          {/* need to organize the menu based on categories */}

          <p className="text-blue-600 text-3xl py-7">Rex's Menu</p>

          <p className="text-xl pb-7">Find everything from our sweet Desserts, our always sizzling Sides, and our mouth watering Appetizers</p>

          <div className="flex">
              {
                dishes.map((dish) => (
                  <div className="flex flex-col flex-1 items-center justify-between flex-wrap pr-10 ">
                    <img className="object-cover h-60 w-60 rounded-md" src={dish.image.url}></img>
                    <p className="text-blue-600 text-lg py-2">{dish.name}</p>
                    <p className="text-xs text-left py-6 min-h-40">{dish.description}</p>
                    <p className="py-3">${dish.price}</p>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded">
                      Add To Cart
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 mt-5 rounded">
                      Customize
                    </button>

                  </div>
                ))
              }
          </div>
        </>
    )
};

export default Dishes;