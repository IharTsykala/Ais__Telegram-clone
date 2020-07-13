import React from "react"
import { connect } from "react-redux"
import { Typography } from "@material-ui/core"

type WindowDialogBlockProps = {
  idCurrentUser: number,
  dispatch: any,
}

const WindowDialogBlock: React.FunctionComponent<WindowDialogBlockProps> = ({
  idCurrentUser,
}) => {
  return (
    <div className={"window-dialog-block"}>
      {(idCurrentUser && (
        <>
          <div className={"window-dialog-block__header"}></div>
          <div className={"window-dialog-block__main"}></div>
          <div className={"window-dialog-block__message-field"}></div>
        </>
      )) || (
        <div className={"window-dialog-block__empty-window"}>
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
})

export default connect(mapStateToProps)(WindowDialogBlock)
