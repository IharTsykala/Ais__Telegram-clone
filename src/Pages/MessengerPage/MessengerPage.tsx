import React from "react"
import ListDialogsBlock from "./ListDialogsBlock/ListDialogsBlock"
import WindowDialogBlock from "./WindowDialogBlock/WindowDialogBlock"

type MessengerPageProps = {
  // dispatch: any,
}

const MessengerPage: React.FunctionComponent<MessengerPageProps> = () => {
  return (
    <div className={"messenger-page"}>
      <ListDialogsBlock />
      <WindowDialogBlock />
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default MessengerPage
