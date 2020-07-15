import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import { MessageInterface } from "../../Redux/InterfacesEntity/Message.Interface"
import { UserInterface } from "../../Redux/InterfacesEntity/User.Interface"

type MessageCardProps = {
  idCurrentUser: number,
  friend: UserInterface,
  message: MessageInterface,
  // dispatch: any,
}

const MessageCard: React.FunctionComponent<MessageCardProps> = ({
  idCurrentUser,
  friend,
  message,
}) => {
  console.log(idCurrentUser)
  console.log(friend)
  console.log(message)
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

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default MessageCard
