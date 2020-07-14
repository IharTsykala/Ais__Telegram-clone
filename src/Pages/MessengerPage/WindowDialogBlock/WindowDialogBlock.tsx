import React from "react"
import { connect } from "react-redux"
import { Typography } from "@material-ui/core"
import { UserInterface } from "../../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../../Redux/InterfacesEntity/Message.Interface"
import SearchIcon from "@material-ui/icons/Search"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import MoreVertIcon from "@material-ui/icons/MoreVert"

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
          <div className={"window-dialog-block__header"}>
            <div className={"window-dialog-block__header-information"}>
              <Typography
                variant={"subtitle1"}
                className={"window-dialog-block__header-information-name"}
              >
                {`${arrayFriends[idCurrentUser].name}${arrayFriends[idCurrentUser].id}`}
              </Typography>
              <Typography
                variant={"caption"}
                className={"window-dialog-block__header-information-members"}
              >
                2 members
              </Typography>
            </div>
            <div className={"window-dialog-block__header-menu"}>
              <SearchIcon />
              <ChromeReaderModeIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className={"window-dialog-block__main"}></div>
          <div className={"window-dialog-block__message-field"}></div>
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
