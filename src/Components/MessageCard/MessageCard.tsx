import React from "react"
import { Typography } from "@material-ui/core"
import { MessageInterface } from "../../Redux/InterfacesEntity/Message.Interface"
import { UserInterface } from "../../Redux/InterfacesEntity/User.Interface"

type MessageCardProps = {
  idCurrentUser: number,
  friend: UserInterface,
  message: MessageInterface,
}

const MessageCard: React.FunctionComponent<MessageCardProps> = ({
  friend,
  message,
}) => {
  return (
    <div className={"message-card"}>
      <div className={"message-card__header"}>
        <Typography variant={"subtitle1"} className={"message-card__header"}>
          {`${friend.name}${message.idOwner}`}
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
