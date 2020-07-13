import { UserInterface } from "../../InterfacesEntity/User.Interface"
import arrayFriends from "../../../services/User"

export interface State {
  arrayFriends: UserInterface[];
}

const initialState: State = {
  arrayFriends: arrayFriends,
}

export const UserReducer = (state: State = initialState) => state
