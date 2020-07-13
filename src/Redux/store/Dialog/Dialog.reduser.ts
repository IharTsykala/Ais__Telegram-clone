import { ActionTypes } from "./Dialog.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  idCurrentUser: number;
}

const initialState: State = {
  idCurrentUser: 1,
}

export const dialogReducer = (
  state: State = initialState,
  action: Action<[{}]>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_DIALOG:
    return {
      ...state,
      idCurrentUser: action.payload,
    }
  default:
    return state
  }
}
