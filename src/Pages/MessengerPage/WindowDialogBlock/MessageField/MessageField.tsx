import React from "react"
import { InputBase } from "@material-ui/core"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicNoneIcon from "@material-ui/icons/MicNone"
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera"

const MessageField: React.FunctionComponent = () => {
  return (
    <div className={"window-dialog-block__message-field"}>
      <div className={"attach-file"}>
        <AttachFileIcon titleAccess={"Send file"} />
      </div>
      <InputBase
        placeholder={"Write a message..."}
        className={"message-input"}
      />
      <div className={"additional-message-block"}>
        <div className={"smiles"}>
          <InsertEmoticonIcon titleAccess={"Smiles"} />
        </div>
        <div className={"void-message"}>
          <MicNoneIcon titleAccess={"Record a message"} />
        </div>
        <div className={"video-message"}>
          <PhotoCameraIcon titleAccess={"Send Media"} />
        </div>
      </div>
    </div>
  )
}

export default MessageField
