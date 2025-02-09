import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {retrievesDishCategories} from './CategorySlice.jsx';

import './style.css';

const CategoriesDish = () => {

    const [menu, setMenu] = useState(false);   
    const dispatch = useDispatch();

    /*useSelector retrieves the state, and useDispatch changes the state */
    const {categoryItems: categories} = useSelector(state => state.categories);

    console.log("I'm in the category dish page");

      useEffect(() => {
        console.log("I'm in the useEffect");

        const urlParams = new URLSearchParams(window.location.search);
        var category_fk = urlParams.get("id");

        dispatch(retrievesDishCategories(category_fk));

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
                <a href="/" className=" mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
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

            <p className="font-serif text-blue-600 text-3xl pt-3">Rex's Menu</p>

            <p className="py-4"> <a href="/">Menu</a>   {'>'}  {categories?.category?.[0]?.name }</p> 
            
            
            <div class="relative text-left">
              <div>
                <button type="button" onClick={() => setMenu(!menu)} class="inline-flex absolute right-0 w-20 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50" aria-expanded="true" aria-haspopup="true">
                  Menu
                  <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              {menu && (
                <div class="absolute right-0 top-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      {
                        categories?.categories?.map((categories) =>(
                          <a href={"/categories?id=" + categories.id} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">{categories.name}</a>
                        ))
                      }
                </div>
              )}
            </div>
            
                        
            <p className="font-serif text-xl pb-7">{categories?.category?.[0]?.description}</p>


            {/*The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist. */}

            <div className="flex">
                {
                    categories?.message?.map((category) => (

                      <div className="flex flex-col flex-1 items-center justify-between flex-wrap pr-10">
                        <img className="object-cover h-60 w-60 rounded-md" src={category.image.url}></img>
                        <p className="text-blue-600 text-lg py-2">{category.name}</p>
                        <p className="text-xs py-6 min-h-40 w-1/4">{category.description}</p>
                        <p className="py-3">${category.price}</p>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded w-40">
                          Add To Cart
                        </button>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 mt-5 w-40 rounded">
                          Customize
                        </button>

                      </div>
                    ))
                }
            </div>

        </>


    )



}

export default CategoriesDish;