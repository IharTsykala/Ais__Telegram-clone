import React from "react"

type ListDialogsBlockProps = {
  // dispatch: any,
}

const ListDialogsBlock: React.FunctionComponent<ListDialogsBlockProps> = () => {
  return (
    <div className={"list-dialog-block"}>
      <div className={"list-dialog-block_header"}></div>
      <div className={"list-dialog-block_main"}>//here will be list card</div>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default ListDialogsBlock
