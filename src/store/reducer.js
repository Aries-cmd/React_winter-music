// combineReducers 合并模块
import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discover/cpns/recommend/store";

const cReducer = combineReducers({
  recommend: recommendReducer
})

export default cReducer