import React from "react"
import ListDialogsBlock from "./ListDialogsBlock/ListDialogsBlock"
import WindowDialogBlock from "./WindowDialogBlock/WindowDialogBlock"

const MessengerPage: React.FunctionComponent = () => {
  return (
    <div className={"messenger-page"}>
      <ListDialogsBlock />
      <WindowDialogBlock />
    </div>
  )
}

export default MessengerPage
