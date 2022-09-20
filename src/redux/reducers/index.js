import { combineReducers } from "redux"
import users from "./users/users"


const rootReducer = () => {
    return combineReducers({
        users
    })
}

export default rootReducer