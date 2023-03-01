const initialJobData ={
     
    data:[]
    }


const ideaReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-IDEADATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default ideaReducers;