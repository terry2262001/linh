import { combineReducers } from "redux";
import counterSlice from "redux/slice/counterSlice";
import userSlice from "redux/slice/userSlice";
const rootReducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
});

export default rootReducer;
