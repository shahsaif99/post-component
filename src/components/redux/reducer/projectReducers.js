

const initialProjectData ={
     
    data:[]
    }


const projectReducers = (state = initialProjectData, action) => {

    
    
    
    switch(action.type){
        case "ADD-PROJECTDATA":
            
        


            return {...state,data:[...state.data,action.payload]}


                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default projectReducers;