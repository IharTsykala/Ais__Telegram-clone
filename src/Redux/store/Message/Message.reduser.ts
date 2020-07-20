import { MessageInterface } from "../../InterfacesEntity/Message.Interface"
import arrayMessages from "../../../services/Message"
import { Action } from "../../interfacesAction/action.interface"
import { ActionTypes } from "../Message/Message.actions"

export interface State {
  arrayMessages: MessageInterface[][];
  idCurrentMessage: number;
  currentMessage: MessageInterface | null;
}

const initialState: State = {
  arrayMessages: arrayMessages,
  idCurrentMessage: 0,
  currentMessage: null,
}

export const MessageReducer = (
  state: State = initialState,
  action: Action<any>
) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_MESSAGE:
      return {
        ...state,
        idCurrentMessage: action.payload,
      }
    case ActionTypes.GET_CURRENT_MESSAGE:
      const foundCurrentMessage = state.arrayMessages[
        action.payload.idCurrentUser - 1
    ].find((item) => item.id === action.payload.idCurrentMessage)
      return {
        ...state,
        currentMessage: foundCurrentMessage,
      }
    default:
      return state
  }
}
