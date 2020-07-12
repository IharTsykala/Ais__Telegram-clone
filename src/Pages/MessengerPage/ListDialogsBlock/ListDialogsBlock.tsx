import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { InputBase } from "@material-ui/core"
import DialogCard from "../../../Components/DialogCard/DialogCard"
import { UserInterface } from "../../../Redux/InterfacesEntity/UserInterface"

const arrayFriends = [
  { id: 1, name: "Sasha" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Sasha" },
  { id: 6, name: "Sasha" },
  { id: 7, name: "Sasha" },
  { id: 8, name: "Sasha" },
  { id: 9, name: "Sasha" },
  { id: 10, name: "Sasha" },
  { id: 11, name: "Sasha" },
  { id: 12, name: "Sasha" },
  { id: 13, name: "Sasha" },
  { id: 14, name: "Sasha" },
  { id: 15, name: "Sasha" },
  { id: 16, name: "Sasha" },
  { id: 17, name: "Sasha" },
  { id: 18, name: "Sasha" },
  { id: 19, name: "Sasha" },
  { id: 20, name: "Sasha" },
]

const arrayMessages = [
  [{ id: 1, text: "message", idDialog: 1, IdOwner: 1, data: new Date() }],
  [{ id: 2, text: "message", idDialog: 2, IdOwner: 2, data: new Date() }],
  [{ id: 3, text: "message", idDialog: 3, IdOwner: 3, data: new Date() }],
  [{ id: 4, text: "message", idDialog: 4, IdOwner: 4, data: new Date() }],
  [{ id: 5, text: "message", idDialog: 5, IdOwner: 5, data: new Date() }],
  [{ id: 6, text: "message", idDialog: 6, IdOwner: 6, data: new Date() }],
  [{ id: 7, text: "message", idDialog: 7, IdOwner: 7, data: new Date() }],
  [{ id: 8, text: "message", idDialog: 8, IdOwner: 8, data: new Date() }],
  [{ id: 9, text: "message", idDialog: 9, IdOwner: 9, data: new Date() }],
  [{ id: 10, text: "message", idDialog: 10, IdOwner: 10, data: new Date() }],
  [{ id: 11, text: "message", idDialog: 11, IdOwner: 11, data: new Date() }],
  [{ id: 12, text: "message", idDialog: 12, IdOwner: 12, data: new Date() }],
  [{ id: 13, text: "message", idDialog: 13, IdOwner: 13, data: new Date() }],
  [{ id: 14, text: "message", idDialog: 14, IdOwner: 14, data: new Date() }],
  [{ id: 15, text: "message", idDialog: 15, IdOwner: 15, data: new Date() }],
  [{ id: 16, text: "message", idDialog: 16, IdOwner: 16, data: new Date() }],
  [{ id: 17, text: "message", idDialog: 17, IdOwner: 17, data: new Date() }],
  [{ id: 18, text: "message", idDialog: 18, IdOwner: 18, data: new Date() }],
  [{ id: 19, text: "message", idDialog: 19, IdOwner: 19, data: new Date() }],
  [{ id: 20, text: "message", idDialog: 20, IdOwner: 20, data: new Date() }],
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
        {arrayFriends.length &&
          arrayFriends.map((item: UserInterface) => (
            <DialogCard
              key={item.id}
              user={item}
              messages={arrayMessages[item.id]}
            />
          ))}
      </div>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default ListDialogsBlock
