import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_CURRENT_DIALOG: "[Dialog] Set current dialog",
}

export const setCurrentDialog = (idCurrentUser: number): Action<number> => ({
  type: ActionTypes.SET_CURRENT_DIALOG,
  payload: idCurrentUser,
})
