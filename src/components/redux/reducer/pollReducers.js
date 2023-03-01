const initialJobData ={
     
    data:[]
    }


const pollReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-POLLDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default pollReducers;