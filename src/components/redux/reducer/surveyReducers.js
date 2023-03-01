const initialJobData ={
     
    data:[]
    }


const surveyReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-SURVEYDATA":
            
        


            return {...state,data:[...state.data,action.payload]}


                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default surveyReducers;