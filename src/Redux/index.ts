import { combineReducers } from "redux"
import { dialogReducer } from "./store/Dialog/Dialog.reduser"
import { UserReducer } from "./store/User/User.reduser"
import { MessageReducer } from "./store/Message/Message.reduser"

export default combineReducers({
  dialog: dialogReducer,
  user: UserReducer,
  message: MessageReducer,
})
