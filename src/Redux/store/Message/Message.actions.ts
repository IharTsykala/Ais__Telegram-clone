import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_CURRENT_MESSAGE: "[Message] Set current message",
  GET_CURRENT_MESSAGE: "[Message] Get current message",
}

export const setCurrentMessage = (
  idCurrentMessage: number
): Action<number> => ({
  type: ActionTypes.SET_CURRENT_MESSAGE,
  payload: idCurrentMessage,
})

export const getCurrentMessage = (
  idCurrentUser: number,
  idCurrentMessage: number
): Action<{}> => ({
  type: ActionTypes.GET_CURRENT_MESSAGE,
  payload: { idCurrentUser, idCurrentMessage },
})
