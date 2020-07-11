import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { InputBase } from "@material-ui/core"

const arrayFriends = [
  { id: 1, name: "Sasha1" },
  { id: 2, name: "Sasha2" },
  { id: 3, name: "Sasha3" },
  { id: 4, name: "Sasha4" },
  { id: 5, name: "Sasha5" },
  { id: 6, name: "Sasha6" },
  { id: 7, name: "Sasha7" },
  { id: 8, name: "Sasha8" },
  { id: 9, name: "Sasha9" },
  { id: 10, name: "Sasha10" },
]

type ListDialogsBlockProps = {
  // dispatch: any,
}

const ListDialogsBlock: React.FunctionComponent<ListDialogsBlockProps> = () => {
  return (
    <div className={"list-dialog-block"}>
      <div className={"list-dialog-block_header"}>
        <MenuIcon className={"menu-icon"} />
        <InputBase placeholder={"Search"} className={"search-input"} />
      </div>
      <div className={"list-dialog-block_main"}>
        {arrayFriends.length && arrayFriends.map((item: any) => <div></div>)}
      </div>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default ListDialogsBlock
