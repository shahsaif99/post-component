

const initialJobData ={
     
    data:[]
    }


const projectReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-PROJECTDATA":
            
        


            return {...state,data:[...state.data,action.payload]}


                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default projectReducers;