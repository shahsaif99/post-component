import React from "react"

export default function Generalcard(){
    return(
        <div className="mx-auto max-w-xs md:max-w-sm">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/50x50" alt="Profile image" />
              <div>
                <h2 className="text-lg font-semibold">Post Title</h2>
                <span className="text-gray-500">Posted 5 hours ago</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, magna eu sollicitudin feugiat, lacus tellus feugiat tellus, a interdum lorem eros eu purus.</p>
          <img src="https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.webp?s=1024x1024&w=is&k=20&c=z6bPuEH5POYgNeJ7CtweLnGjrjq6kj81NxypwnDXo2c="/>
          <div className="flex justify-between items-center">
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              Like
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10a4 4 0 11-8 0M15 10V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v6m4 4v6a2 2 0 002 2h2a2 2 0 002-2v-6m-8 0V4a2 2 0 012-2h2a2 2 0 012 2v10" /></svg>
              Comment
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m0 0l-3-3m3 3l3-3M4 12h12" /></svg>
              Share
            </button>
          </div>
        </div>
      </div>
      
      
    )
}