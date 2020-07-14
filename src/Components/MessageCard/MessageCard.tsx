import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import { MessageInterface } from "../../Redux/InterfacesEntity/Message.Interface"
import { UserInterface } from "../../Redux/InterfacesEntity/User.Interface"

type MessageCardProps = {
  idCurrentUser: number,
  friend: UserInterface,
  messages: MessageInterface[],
  // dispatch: any,
}

const MessageCard: React.FunctionComponent<MessageCardProps> = ({
  idCurrentUser,
  friend,
  messages,
}) => {
  console.log(friend)
  return (
    <div className={"message-card"}>
      <div className={"message-card__header"}>
        <Typography variant={"subtitle1"} className={"message-card__header"}>
          {friend.name}
        </Typography>
      </div>
      <div className={"message-card__main"}>
        <Typography variant={"body2"} className={"message-card__main"}>
          {messages[i]}
        </Typography>
      </div>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default MessageCard
