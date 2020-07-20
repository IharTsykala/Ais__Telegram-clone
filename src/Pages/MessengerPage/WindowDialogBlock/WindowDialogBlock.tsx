import React from "react"
import { connect } from "react-redux"
import { Typography } from "@material-ui/core"
import { UserInterface } from "../../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../../Redux/InterfacesEntity/Message.Interface"
import HeaderWindowDialog from "./HeaderWindowDialog/HeaderWindowDialog"
import MainWindowDialog from "./MainWindowDialog/MainWindowDialog"
import MessageField from "./MessageField/MessageField"
import CloseIcon from "@material-ui/icons/Close"
import ReplyIcon from "@material-ui/icons/Reply"
import { setCurrentMessage } from "../../../Redux/store/Message/Message.actions"

type WindowDialogBlockProps = {
  idCurrentUser: number,
  arrayFriends: UserInterface[],
  arrayMessages: MessageInterface[][],
  idCurrentMessage: number,
  currentMessage: MessageInterface,
  dispatch: any,
}

const WindowDialogBlock: React.FunctionComponent<WindowDialogBlockProps> = ({
  idCurrentUser,
  arrayFriends,
  arrayMessages,
  idCurrentMessage,
  currentMessage,
  dispatch,
}) => {
  console.log(currentMessage)
  return (
    <div className={"window-dialog-block"}>
      {(idCurrentUser && (
        <div
          className={
            (idCurrentMessage &&
              "window-dialog-block__current-dialog-information_reply") ||
            "window-dialog-block__current-dialog-information"
          }
        >
          <HeaderWindowDialog
            idCurrentUser={idCurrentUser}
            arrayFriends={arrayFriends}
          />
          <MainWindowDialog
            idCurrentUser={idCurrentUser}
            arrayFriends={arrayFriends}
            arrayMessages={arrayMessages}
            dispatch={dispatch}
          />
          {idCurrentMessage !== 0 && (
            <div className={"window-dialog-block__reply"}>
              <ReplyIcon titleAccess={"Reply"} />
              <div className={"window-dialog-block__reply-message"}>
                <Typography
                  variant={"caption"}
                  className={"window-dialog-block__reply-message-name"}
                >
                  {`${arrayFriends[idCurrentUser - 1].name}${
                    currentMessage.idOwner
                  }`}
                </Typography>
                <Typography
                  variant={"caption"}
                  className={"window-dialog-block__reply-message-text"}
                >
                  {currentMessage.text}
                </Typography>
              </div>
              <div className={"window-dialog-block__reply-close"}>
                <CloseIcon
                  titleAccess={"Cancel reply"}
                  onClick={() => dispatch(setCurrentMessage(0))}
                />
              </div>
            </div>
          )}
          <MessageField />
        </div>
      )) || (
        <div className={"window-dialog-block__start-window"}>
          <Typography variant={"subtitle1"} className={"text-select-chat"}>
            Please select chat to start messaging
          </Typography>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  idCurrentUser: state.dialog.idCurrentUser,
  arrayFriends: state.user.arrayFriends,
  arrayMessages: state.message.arrayMessages,
  idCurrentMessage: state.message.idCurrentMessage,
  currentMessage: state.message.currentMessage,
})

export default connect(mapStateToProps)(WindowDialogBlock)
