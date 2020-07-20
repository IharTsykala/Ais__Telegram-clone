import React from "react"
import { connect } from "react-redux"
import { Typography } from "@material-ui/core"
import { UserInterface } from "../../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../../Redux/InterfacesEntity/Message.Interface"
import HeaderWindowDialog from "./HeaderWindowDialog/HeaderWindowDialog"
import MainWindowDialog from "./MainWindowDialog/MainWindowDialog"
import MessageField from "./MessageField/MessageField"

type WindowDialogBlockProps = {
  idCurrentUser: number,
  arrayFriends: UserInterface[],
  arrayMessages: MessageInterface[][],
  dispatch: any,
}

const WindowDialogBlock: React.FunctionComponent<WindowDialogBlockProps> = ({
  idCurrentUser,
  arrayFriends,
  arrayMessages,
  dispatch,
}) => {
  return (
    <div className={"window-dialog-block"}>
      {(idCurrentUser && (
        <div className={"window-dialog-block__current-dialog-information"}>
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
})

export default connect(mapStateToProps)(WindowDialogBlock)
