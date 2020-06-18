import { combineReducers } from "redux";
import logsReducer from "./logsReducer";
import techniciansReducer from "./techniciansReducer";

export default combineReducers({
    logs: logsReducer,
    technicians: techniciansReducer
});
