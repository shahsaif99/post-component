
const initialCandidateData ={
     
    data:[]
    }


const candidateReducers = (state = initialCandidateData, action) => {

    
    
    
    switch(action.type){
        case "ADD-CANDIDATEDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default candidateReducers;