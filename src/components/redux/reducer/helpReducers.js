
const initialHelpData ={
     
    data:[]
    }


const helpReducers = (state = initialHelpData, action) => {

    
    
    
    switch(action.type){
        case "ADD-HELPDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default helpReducers;