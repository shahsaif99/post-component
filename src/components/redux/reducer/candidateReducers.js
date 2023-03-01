
const initialJobData ={
     
    data:[]
    }


const candidateReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-CANDIDATEDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default candidateReducers;