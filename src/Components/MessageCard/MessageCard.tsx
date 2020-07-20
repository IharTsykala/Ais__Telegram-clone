import React from "react"
import { Typography } from "@material-ui/core"
import { MessageInterface } from "../../Redux/InterfacesEntity/Message.Interface"
import { UserInterface } from "../../Redux/InterfacesEntity/User.Interface"
import {
  setCurrentMessage,
  getCurrentMessage,
} from "../../Redux/store/Message/Message.actions"

type MessageCardProps = {
  idCurrentUser: number,
  friend: UserInterface,
  message: MessageInterface,
  dispatch: any,
}

const MessageCard: React.FunctionComponent<MessageCardProps> = ({
  idCurrentUser,
  friend,
  message,
  dispatch,
}) => {
  return (
    <div className={"message-card"}>
      <div className={"message-card__header"}>
        <Typography
          variant={"subtitle1"}
          className={"message-card__header-name"}
        >
          {`${friend.name}${message.idOwner}`}
        </Typography>
        <Typography
          variant={"subtitle1"}
          className={"message-card__header-reply"}
          onClick={() => {
            dispatch(setCurrentMessage(message.id))
            dispatch(getCurrentMessage(idCurrentUser, message.id))
          }}
        >
          {`reply`}
        </Typography>
      </div>
      <div className={"message-card__main"}>
        <Typography variant={"body2"} className={"message-card__main"}>
          {message.text}
        </Typography>
      </div>
    </div>
  )
}

export default MessageCard
