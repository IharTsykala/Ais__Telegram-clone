import { MessageInterface } from "../../InterfacesEntity/Message.Interface"
import arrayMessages from "../../../services/Message"

export interface State {
  arrayMessages: MessageInterface[][];
}

const initialState: State = {
  arrayMessages: arrayMessages,
}

export const MessageReducer = (state: State = initialState) => state
