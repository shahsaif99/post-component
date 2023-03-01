
const initialJobData ={
     
    data:[]
    }


const bidReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-BIDDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default bidReducers;