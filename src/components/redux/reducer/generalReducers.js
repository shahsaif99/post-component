const initialJobData ={
     
    data:[]
    }


const generalReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-GENERALDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default generalReducers;