const initialPollData ={
     
    data:[]
    }


const pollReducers = (state = initialPollData, action) => {

    
    
    
    switch(action.type){
        case "ADD-POLLDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default pollReducers;