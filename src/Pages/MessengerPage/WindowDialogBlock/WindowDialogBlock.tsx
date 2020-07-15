import React from "react"
import { connect } from "react-redux"
import { Typography } from "@material-ui/core"
import { UserInterface } from "../../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../../Redux/InterfacesEntity/Message.Interface"
import SearchIcon from "@material-ui/icons/Search"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import MessageCard from "../../../Components/MessageCard/MessageCard"

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
  // console.log(arrayMessages[idCurrentUser - 1])
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
                {`${arrayFriends[idCurrentUser - 1].name}${
                  arrayFriends[idCurrentUser - 1].id
                }`}
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
          <div className={"window-dialog-block__main"}>
            {arrayMessages &&
              arrayMessages[idCurrentUser - 1].length &&
              arrayMessages[idCurrentUser - 1].map((item: MessageInterface) => (
                <MessageCard
                  key={item.id}
                  idCurrentUser={idCurrentUser}
                  friend={arrayFriends[idCurrentUser - 1]}
                  message={item}
                />
              ))}
          </div>
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
