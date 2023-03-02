
const initialBidData ={
     
    data:[]
    }


const bidReducers = (state = initialBidData, action) => {

    
    
    
    switch(action.type){
        case "ADD-BIDDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default bidReducers;