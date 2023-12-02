import { applyMiddleware, createStore} from "redux";
import { rootReducer } from "../reducer/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { contentCounter } from "../middleware/counterContent";


const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(contentCounter,thunk)))


export default store