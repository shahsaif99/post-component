import React from "react"
import { Route, Routes } from "react-router-dom"
import Post from "./components/home/Post"
import Product from "./components/forms/Product"
import ProductCard from "./components/cards/Productcard"
import Jobform from "./components/forms/Jobform";
import Createpost from "./components/home/Createpost";
import Posttype from "./components/home/Posttype"
import General from "./components/forms/General"
import Projectform from "./components/forms/Projectform"
import Courseform from "./components/forms/Courseform"
import Ideaform from "./components/forms/Ideaform"
import Helpform from "./components/forms/Helpform"
import Jobcard from "./components/cards/Jobcard"
import Projectcard from "./components/cards/Projectcard"
import Coursecard from "./components/cards/Coursecard"
import Generalcard from "./components/cards/Generalcard"
import Article from "./components/cards/Article"
import Idea from "./components/cards/Idea"
import Articleform from "./components/forms/Articleform"
import SurveyIcon from "./components/forms/Dummy"
import Addsurvey from "./components/forms/Addsurvey"
import Poll from "./components/forms/Poll"


export default function App() {

  
  const [productForm,setProductForm]=React.useState('');
  const [createPostPass,setCreatePostPass]=React.useState(false)
 
  
  
  return(
    <div>
     
    <Routes>
      
    <Route path="/" element={<Createpost/>}/>

      {/* Create/Select Post Start */}
{
 

   <Route path="/selectpost" element={<Post  onClick={value =>setProductForm(value)} cp={createPostPass} />}/> 
   
}
   {/* Create/Select Post End */}

   {/* Add Product/Services Form Start */}
    
     <Route path="/addproduct" element={<Product onClick={value =>setProductForm(value)}/>} />
    
  {/* Add product/Services Form End */}

{/* select post type start */}
<Route path="/posttype" element={<Posttype/>}/>
{/* Select post type end */}

{/* Forms components start */}
    {/* Job Form Start   */}

  

    <Route path="/jobform" element={<Jobform />}/>
    
  
    {/* Add job form End */}

    {/* Product Form start */}
    

      <Route path="/projectform" element={<Projectform/>}/>
    

    {/* Product Form Ends */}

    {/* Course form start */}
    <Route path="/courseform" element={<Courseform/>}/>

    {/* Course form ends */}

    {/* Idea Form Start */}
      <Route path="/ideaform" element={<Ideaform/>}/>
    {/* Idea form ends */}

 {/* General form Start */}
 <Route path="/generalform" element={<General/>}/>
 {/* General post End */}
 {/* article form start */}
  <Route path="/addarticle" element={<Articleform/>}/>
 {/* article form ends */}
{/* Add survey Start */}
<Route path="/addsurvey" element={<Addsurvey/>}/>
{/* Add survey ends */}
 {/* add Poll Starts */}
  <Route path="/addpoll" element={<Poll/>}/>
 {/* add poll ends */}
{/* Help form start */}
  <Route path="/helpform" element={<Helpform/>}/>
{/* Help form ends */}
 {/* Form components end */}

  {/* Card Components Start */}
  {/* Product card Start */}
  <Route path="/products" element={<ProductCard/>}/>
  {/* Product card ends */}

  {/* Job Card Starts */}
  <Route path="/jobs" element={<Jobcard/>}/>
  {/* Job Card ends */}

{/* project card starts */}
<Route path="/projects" element={<Projectcard/>}/>
{/* Project card ends */}

{/* Course card starts */}
<Route path="courses" element={<Coursecard/>}/>
{/* Course card ends */}
 
 {/* Genearal post card starts */}
 <Route path="/posts" element={<Generalcard/>}/>
 {/* General post card ends */}

 {/* Article post Start */}
<Route path="/articles" element={<Article/>}/>
 {/* Article Ends */}
 {/* Idea post Start */}
 <Route path="/ideas" element={<Idea/>}/>
 {/* idea post ends */}
  {/* Card components End */}


    </Routes>
    {/* <SurveyIcon/> */}
      </div>
    )
}
   