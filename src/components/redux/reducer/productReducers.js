

const initialJobData ={
     
    data:[]
    }


const productReducers = (state = initialJobData, action) => {

    
    
    
    switch(action.type){
        case "ADD-PRODUCTDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default productReducers;