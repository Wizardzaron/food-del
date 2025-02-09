import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {retrievesCategories} from './CategorySlice.jsx';

import './style.css';


const Categories = () => {

    const dispatch = useDispatch();

    /*useSelector retrieves the state, and useDispatch changes the state */
    const {categoryItems: categories} = useSelector(state => state.categories);

    console.log("I'm in the list page");

      useEffect(() => {
        console.log("I'm in the useEffect");
        dispatch(retrievesCategories());
      }, []);

      console.log("Hi there: " + categories)

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
                <a className=" mt-4 lg:mt-0 text-white cursor-not-allowed mr-4">
                  Menu
                </a>
                <a href="/dishes" className=" mt-4  lg:mt-0 text-teal-200 hover:text-white mr-4">
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

            <p className="font-serif text-blue-600 text-3xl py-7">Rex's Menu</p>

            <p className="font-serif text-xl pb-7">Find everything from our sweet Desserts, our always sizzling Sides, and our mouth watering Appetizers</p>

            <div className="flex">
                {
                    categories.map((category) => (
                        <a className="flex flex-col flex-1 items-center justify-between flex-wrap pr-10 " href={"/categories?id=" + category.id}>
                            <img className="object-cover h-60 w-60 rounded-md" src={category.url}></img>
                            <p className="font-bold text-2xl transition ease-in-out delay-125 hover:text-blue-600">{category.name}</p>
                        </a>
                    ))
                }
            </div>

        </>


    )



}

export default Categories;