import React from "react";
import { Link } from "react-router-dom";

export default function Product(props){
	// const for storing form data
	const [productData,setProductData]=React.useState({pname:"",price:"",discription:"",pimg:""})
	// let for storing name and value
	let name, value,file,type;
	// handleInputs for storing data into productData object
	const handleInputs = (e) =>{
		file=e.target.files[0];
		name = e.target.name;
		value=e.target.value;
		type=e.target.type;
	setProductData({...productData,[name]:type === "file" ? URL.createObjectURL(file) : value}); 

	}
	
	console.log(productData)
    return(
		
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">

  <div className="container max-w-screen-lg mx-auto">
    <div>
     

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Product/Services Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="full_name">Product/Services Title</label>
                <input type="text" name="pname" value={productData.pname} onChange={handleInputs} id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="price">Price</label>
                <input type="price" name="price" id="price" value={productData.price} onChange={handleInputs} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0000" />
              </div>
			  <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> Discription</span>
				<textarea rows="9" name="discription" value={productData.discription} onChange={handleInputs} placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>

              </div>
			  <div className="md:col-span-5">

			  <label className="block w-56">
		                <span className="mb-1">Upload Product Image</span><br/>
		            </label>
		          <input className="btn" name="pimg"  onChange={handleInputs} type="file" accept="image/png, image/gif, image/jpeg"></input>
			  </div>

			<img src={productData.pimg}/>
		 			

             

              
					
			  <div className="flex flex-col md:flex-row md:col-span-5 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/selectpost">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                &nbsp; Back &nbsp;
              </button>
            </Link>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
      </div>
             

            </div>
          </div>
        </div>
      </div>
    </div>

   
  </div>
</div>




		)
		
}



	{/* <button type="button" className=" self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Add post</button> */}
	        {/* <div> */}
				   
		 	{/* Add E-commerce product Form */}
		{/* // 		<form novalidate="" className=" mt-40 flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid max-w-3xl ml-auto mr-auto">
		// 			<div className="text-center text-2xl">Add Your Product/Services Information</div>
		// 			<label className="block flex">
		// 				<span className="mb-1 w-56">Product/Services Name:</span>
		// 				<input required type="text" name="pname" placeholder="Product Name" value={productData.pname} onChange={handleInputs} className=" block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100 " />
		// 			</label>
		// 			<label className="block flex">
		// 				<span className="mb-1 w-56">Price</span>
		// 				<input type="number" name="price" placeholder="Price" value={productData.price} onChange={handleInputs} className=" block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100" />
		// 			</label>
		// 			<label className="block">
		// 				<span className="mb-1">Discription</span>
		// 				<textarea rows="3" name="discription" value={productData.discription} onChange={handleInputs} className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
		// 			</label>
		//             <label className="block w-56">
		//                 <span className="mb-1">Upload Product Image</span><br/>
		//             </label>
		//             <input className="btn" name="pimg" value={productData.pimg} onChange={handleInputs} type="file" accept="image/png, image/gif, image/jpeg"></input>
		// 			<Link to="/selectpost">
		
		// 			<button   className=" w-24 rounded-lg  bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
		//               back
		//               </button>
		// 			</Link>
		// 			<button type="submit">submit</button>
		// 		</form>
			
		 {/* E-commerce Product Form End */}
		         {/* </div> */} 