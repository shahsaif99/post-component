import React from "react";
import { Link } from "react-router-dom";


export default function Createpost(){
    return (
        <Link to="/selectpost">
        <button  className="justify-center flex ml-auto mr-auto mt-14  bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-56 ">
             <div>Create Post </div>
              </button>
        </Link>
    )
}