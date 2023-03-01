

const initialJobData ={
     
    data:[]
    }


const jobReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-JOBDATA":
            
        


            return {...state,data:[...state.data,action.payload]}


                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default jobReducers;