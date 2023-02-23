import { combineReducers } from "redux";
import counterSlice from "redux/slice/counterSlice";
const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
