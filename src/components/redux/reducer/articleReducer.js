const initialJobData ={
     
    data:[]
    }


const articleReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-ARTICLEDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default articleReducers;