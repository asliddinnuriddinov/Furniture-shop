import { combineReducers } from "redux";
import cartReducer from "./cartReducer";


const RootReducer=combineReducers({
    cart:cartReducer
})

export default RootReducer