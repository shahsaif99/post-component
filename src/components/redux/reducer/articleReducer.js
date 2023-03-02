const initialArticleData ={
     
    data:[]
    }


const articleReducers = (state = initialArticleData, action) => {

    
    
    
    switch(action.type){
        case "ADD-ARTICLEDATA":
            
        
            

            return {...state,data:[...state.data,action.payload]}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default articleReducers;