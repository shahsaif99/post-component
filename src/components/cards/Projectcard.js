import React ,{useState}from "react";
import { useSelector ,useDispatch} from "react-redux";
import {BsFillBriefcaseFill} from "react-icons/bs"
import {AiOutlineCheck} from "react-icons/ai"
import {FaMoneyBillWave} from "react-icons/fa"
import {BsStopwatch} from "react-icons/bs"
import {BiArrowBack} from "react-icons/bi"
import { addBidData } from "../redux/actions";




export default function Projectcard(){
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const for storing form data
const [projectProposal,setProjectProposal]=React.useState({bid:"",proposal:""})

const data = useSelector((state) => state.projectReducers.data);
const dispatch=useDispatch();



// let for storing name and values
let name, value
// handleInputs for storing data into productData object
const handleInputs = (e) =>{
  name = e.target.name;
  value=e.target.value;
 
  
setProjectProposal({...projectProposal,[name] : value}); 

}

const onFormSubmit=(e)=>{
  e.preventDefault()
  dispatch(addBidData(projectProposal))
  setIsModalOpen(false)
   }


    const viewMore = param => event => {
   
      // document.getElementById("body-"+param).classList.add("hidden");
      const check= document.getElementById("body-"+param).classList.contains("hidden");
      if(check){
        document.getElementById("body-"+param).classList.remove("hidden");
        document.getElementById("discription-"+param).classList.add("hidden");
      }
      else {
        document.getElementById("body-"+param).classList.add("hidden");
        document.getElementById("discription-"+param).classList.remove("hidden");
      }
     
    };
  

    return(
        
        <div className="h-full pt-6 pb-12 bg-gray-300">  
        
        <div id="card" className="">

          <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Projects</h2>
          

          {/* <!-- container for all cards --> starts */}
          {data?.map((elem) => (
          <div key={elem.id}>
          <div  id={"body-"+(elem.id)} className="container w-screen  flex flex-col">
            {/* <!-- card --> */}
            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                              bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              {/* <!-- media --> */}
             
              {/* <!-- content --> */}
              <div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
                <h1  onClick={viewMore(elem.id)} className="font-semibold text-2xl leading-tight ">{elem.data.prname}</h1>
                
                <br/>
                <div className="bg-lime-200 text-lime-900 w-fit flex items-center">
                 <div>
                    Budget {elem.data.ptype}
                    </div> 
                    <BsFillBriefcaseFill className="ml-3"/>
                    <AiOutlineCheck/>
                </div>
                <p className="mt-1 h-9  bg-lime-200 text-lime-900 w-fit flex items-center">
                 <FaMoneyBillWave className="mr-1"/> 
                   {elem.data.currency}-{elem.data.minsalary}-{elem.data.maxsalary} 
                    <AiOutlineCheck/>
                </p>
                
                <div className="mt-3 w-fit h-6 bg-orange-200 flex items-center mb-2">
                    <BsStopwatch/> <p className="text-red-900 ">{elem.data.days} days</p>
                </div>
              </div>
            </div>
            {/* <!--/ card--> */}
          </div>
        
          {/* <!--/ flex--> */}
          {/* COntainer for all cards ends */}

          {/* Container for Idea start */}
        

<div id={"discription-"+(elem.id)} className="container w-100 w-1/3  flex flex-col w-full hidden">
{/* <!-- card --> */}
<div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                            bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
{/* <!-- media --> */}
<div className="h-64 w-auto ">
{/* <img className="inset-0 h-full w-full object-cover object-center" :src="card.img" /> */}
</div>
{/* <!-- content --> */}
<div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
<BiArrowBack  onClick={viewMore(elem.id)} className="text-4xl text-blue-700 mb-5"/>
<h1 className="font-semibold text-2xl leading-tight ">{elem.data.prname}</h1>
<p className="">
Company name
</p>
<div className="bg-lime-200 text-lime-900 w-fit flex items-center my-2">

<div>{elem.data.skils}</div>

<BsFillBriefcaseFill className="ml-3" />
<AiOutlineCheck />
</div>
<br/>
<div className="bg-lime-200 text-lime-900 w-fit flex items-center">
                 <div>
                    Budget {elem.data.ptype}
                    </div> 
                    <BsFillBriefcaseFill className="ml-3"/>
                    <AiOutlineCheck/>
                </div>
               
                <div className="mt-3 w-fit h-6 bg-orange-200 flex items-center mb-2">
                    <BsStopwatch/> <p className="text-red-900 ">{elem.data.days} days</p>
                </div>
<button onClick={() => setIsModalOpen(true)}  className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  &nbsp;   Apply &nbsp; 
</button>
  {/* modal starts */}
  <div className={`fixed z-10 inset-0 overflow-y-auto ${isModalOpen ? "" : "hidden"}`}>
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white border border-gray-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-3/5 h-3/5" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="px-4 py-5 sm:p-6">
        <div className="mb-4">
          <label htmlFor="question1" className="block text-gray-700 font-bold mb-2">
            Bid Ammount
          </label>
          <input type="number" name="bid" value={projectProposal.bid} onChange={handleInputs} id="question1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
        </div>
        <div className="mb-4">
          <label htmlFor="question2" className="block text-gray-700 font-bold mb-2">
            Proposal
          </label>
          <textarea  row="3" id="question2" name="proposal" value={projectProposal.proposal} onChange={handleInputs} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Cover latter" ></textarea>
        </div>
     
        {/* Modal Buttons Here */}
      </div>
      <br/> 
      {/* cancel/submit start */}
      <div className="mx-6 flex flex-col md:flex-row md:col-span-5 justify-between items-center">
          <div className="mb-4 md:mb-0">
         
              <button  onClick={() => setIsModalOpen(false)}  className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                &nbsp; Cancel &nbsp;
              </button>
            
          </div>
          <div className="flex justify-end">
            <button onClick={onFormSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Apply
            </button>
          </div>
      </div>
      {/* cancel/submit ends */}
    </div>
  </div>
</div>




                {/* modal ends */}
<hr className="my-6  border-gray-400 border-3"></hr>

<p className="font-semibold text-2xl leading-right truncate"> Project Details</p>

<hr className="my-3  border-gray-400 border-3"></hr>
<p className="font-semibold text-1xl leading-right mt-5">Full Project discription</p>
<p>{elem.data.pdiscription}</p>
<p className="my-3 font-semibold">Skills required</p>
<p className="">{elem.data.skills}</p>
<p className="mt-3 font-semibold"> Budget</p>
<p className="mt-1 h-9  bg-lime-200 text-lime-900 w-fit flex items-center">
                 <FaMoneyBillWave className="mr-1"/> 
                   {elem.data.currency}-{elem.data.minsalary}-{elem.data.maxsalary} 
                    <AiOutlineCheck/>
                </p>
                



<hr className="my-3  border-gray-400 border-3"></hr>
<p className="mt-3 font-semibold text-lg">Job activity</p>
<div className="flex items-center">

<BsFillBriefcaseFill/>
<p className="ml-4">user revied this job 2 days ago</p>
</div>
</div>
</div>
{/* <!--/ card--> */}
</div>

</div> ))}
         
          {/* Container for ideas end */}
        </div>
      </div>
    )
}