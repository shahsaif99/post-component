import React from "react";
import { useDispatch } from "react-redux";
import { addProductData } from "../redux/actions";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Product(props){
	// const for storing form data
	const [productData,setProductData]=React.useState({pname:"",price:"",discription:"",pimg:""})


	const dispatch=useDispatch();
	// let for storing name and value
	let name, value,file,type;
	// handleInputs for storing data into productData object

const [titleError, settitleError] = useState(true);
const [priceError, setpriceError] = useState(true);
const [descError, setdescError] = useState(true);
const [imageError, setimage] = useState(true);




	const handleInputs = (e) =>{
		
		name = e.target.name;
		value=e.target.value;
		
	setProductData({...productData,[name] : value}); 

  if (e.target.id === 'full_name') {

    if (e.target.value.length <= 3  ) {
      settitleError(true)
    }
    else{
      settitleError(false)
    }
    
  }
  else if (e.target.id === 'price') {
   const p = parseInt(e.target.value)
    if (e.target.value < 1) {
      setpriceError(true)
    }
    else if(p > 1){
      setpriceError(false)
    }
    else{
      setpriceError(true)
    }
  
    
  }
  else if (e.target.id === 'desc') {

    if (e.target.value.length <= 20) {
      setdescError(true)
    }
    else if (e.target.value.length > 500) {
      setdescError(true)
    } 
    else{
      setdescError(false)
    }
    
  }
 
  
  else {
    
  }

	}
	const uploadImage = (e) => {
		file= e.target.files[0];
		name=e.target.name;

		setProductData({...productData,[name]:URL.createObjectURL(file)})
    
   if(e.target.files.length>1){
    setimage(true)
   }
   else{
    setimage(false)
   }

	}

	
	 
	const onFormSubmit=(e)=>{
  if(titleError  || descError || priceError || imageError  ){
      alert("Please Fill all the form correctly ")
    }
    else{

      e.preventDefault()
      dispatch(addProductData(productData))
    }
	   }

    return(
		
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">

  <div className="container max-w-screen-lg mx-auto">
    <div>
     

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Product/Services Details</p>
            <p>Please fill out all the fields.</p>
			<div className="mt-24">

			<Link  to="/products">View Products</Link>
			</div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="full_name">Product/Services Title</label>
                <input type="text" name="pname"  value={productData.pname} onChange={handleInputs} id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  /> <br></br>{ titleError ?<span className="text-xs text-red-600">Please enter valid product name</span> : ""}
              </div>

              <div className="md:col-span-5">
                <label htmlFor="price">Price</label>
                <input type="price" name="price" id="price" value={productData.price} onChange={handleInputs} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0000" /><br></br>{ priceError ?<span className="text-xs text-red-600">Please Enter valid price</span> : ""}
              </div>
			  <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> Discription</span>
				<textarea rows="9" id="desc" name="discription" value={productData.discription} onChange={handleInputs} placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea><br></br>{ descError ?<span className="text-xs text-red-600">Discription should be atleast 20 to 500 characters</span> : ""}
			</label>

              </div>
			  <div className="md:col-span-5">

			  <label className="block w-56">
		                <span className="mb-1">Upload Product Image</span><br/>
		            </label>
		          <input id="pimg" required className="btn" name="pimg"  onChange={uploadImage} type="file" accept="image/png, image/gif, image/jpeg"></input>
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
            <input type='button' value={'submit'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"   onClick={onFormSubmit}/> 
              
            
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







// import React from "react";
// import { useDispatch } from "react-redux";
// import { addProductData } from "../redux/actions";
// import { Link } from "react-router-dom";

// export default function Product(props){
// 	// const for storing form data
// 	const [productData,setProductData]=React.useState({pname:"",price:"",discription:"",pimg:""})


// 	const dispatch=useDispatch();
// 	// let for storing name and value
// 	let name, value,file,type;
// 	// handleInputs for storing data into productData object



// 	const handleInputs = (e) =>{
		
// 		name = e.target.name;
// 		value=e.target.value;
		
// 	setProductData({...productData,[name] : value}); 

// 	}
// 	const uploadImage = (e) => {
// 		file= e.target.files[0];
// 		name=e.target.name;

// 		setProductData({...productData,[name]:URL.createObjectURL(file)})
// 	}
	
	 
// 	const onFormSubmit=(e)=>{
// 		e.preventDefault()
// 		dispatch(addProductData(productData))
// 	   }

//     return(
		
// <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">

//   <div className="container max-w-screen-lg mx-auto">
//     <div>
     

//       <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//         <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//           <div className="text-gray-600">
//             <p className="font-medium text-lg">Product/Services Details</p>
//             <p>Please fill out all the fields.</p>
// 			<div className="mt-24">

// 			<Link  to="/products">View Products</Link>
// 			</div>
//           </div>

//           <div className="lg:col-span-2">
//             <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//               <div className="md:col-span-5">
//                 <label htmlFor="full_name">Product/Services Title</label>
//                 <input type="text" name="pname" value={productData.pname} onChange={handleInputs} id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//               </div>

//               <div className="md:col-span-5">
//                 <label htmlFor="price">Price</label>
//                 <input type="price" name="price" id="price" value={productData.price} onChange={handleInputs} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0000" />
//               </div>
// 			  <div className="md:col-span-5">
// 			  <label className="block ">
// 				<span className="mb-1"> Discription</span>
// 				<textarea rows="9" name="discription" value={productData.discription} onChange={handleInputs} placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
// 			</label>

//               </div>
// 			  <div className="md:col-span-5">

// 			  <label className="block w-56">
// 		                <span className="mb-1">Upload Product Image</span><br/>
// 		            </label>
// 		          <input className="btn" name="pimg"  onChange={uploadImage} type="file" accept="image/png, image/gif, image/jpeg"></input>
// 			  </div>

// 			<img src={productData.pimg}/>
		 			

             

              
					
// 			  <div className="flex flex-col md:flex-row md:col-span-5 justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <Link to="/selectpost">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 &nbsp; Back &nbsp;
//               </button>
//             </Link>
//           </div>
//           <div className="flex justify-end">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onFormSubmit}>
//               Submit
//             </button>
//           </div>
//       </div>
             

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

   
//   </div>
// </div>




// 		)
		
// }
