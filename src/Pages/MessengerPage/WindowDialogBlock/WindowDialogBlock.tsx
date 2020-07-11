import React from "react"

type WindowDialogBlockProps = {
  // dispatch: any,
}

const WindowDialogBlock: React.FunctionComponent<WindowDialogBlockProps> = () => {
  return (
    <div className={"window-dialog-block"}>
      //will be window dialog here
      <div className={"window-dialog-block__header"}></div>
      <div className={"window-dialog-block__main"}></div>
      <div className={"window-dialog-block__message-field"}></div>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default WindowDialogBlock
