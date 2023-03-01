import jobReducers from "./jobReducers";
import productReducers from "./productReducers";
import courseReducers from "./courseReducers";
import helpReducers from "./helpReducers";
import candidateReducers from "./candidateReducers";
import projectReducers from "./projectReducers";
import bidReducers from "./bidReducers";
import generalReducers from "./generalReducers";
import ideaReducers from "./ideaReducers";
import pollReducers from "./pollReducers";
import surveyReducers from "./surveyReducers";
import articleReducers from "./articleReducer";
import { combineReducers  } from "redux";


const rootReducer= combineReducers({
    jobReducers,
    productReducers,
    courseReducers,
    helpReducers,
    candidateReducers,
    projectReducers,
    bidReducers,
    generalReducers,
    ideaReducers,
    pollReducers,
    surveyReducers,
    articleReducers
    
})

export default rootReducer