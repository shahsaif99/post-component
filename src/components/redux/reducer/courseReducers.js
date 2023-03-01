
const initialJobData ={
     
    data:[]
    }


const courseReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-COURSEDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default courseReducers;