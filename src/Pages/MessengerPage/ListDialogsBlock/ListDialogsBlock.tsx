import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { InputBase } from "@material-ui/core"
import DialogCard from "../../../Components/DialogCard/DialogCard"
import { UserInterface } from "../../../Redux/InterfacesEntity/User.Interface"

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

const newDate = () => {
  const newDate = new Date()
  let meridiem = "AM"
  let hours = newDate.getHours()
  let minutes = newDate.getMinutes()
  if (hours > 11) {
    meridiem = "PM"
    hours -= 12
  }
  if (minutes < 10) return `${hours}:0${minutes} ${meridiem}`
  return `${hours}:${minutes} ${meridiem}`
}

const arrayMessages = [
  [
    {
      id: 1,
      text: "message",
      idDialog: 1,
      idOwner: 1,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 2,
      text: "message",
      idDialog: 2,
      idOwner: 2,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 3,
      text: "message",
      idDialog: 3,
      idOwner: 3,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 4,
      text: "message",
      idDialog: 4,
      idOwner: 4,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 5,
      text: "message",
      idDialog: 5,
      idOwner: 5,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 6,
      text: "message",
      idDialog: 6,
      idOwner: 6,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 7,
      text: "message",
      idDialog: 7,
      idOwner: 7,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 8,
      text: "message",
      idDialog: 8,
      idOwner: 8,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 9,
      text: "message",
      idDialog: 9,
      idOwner: 9,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 10,
      text: "message",
      idDialog: 10,
      idOwner: 10,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 11,
      text: "message",
      idDialog: 11,
      idOwner: 11,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 12,
      text: "message",
      idDialog: 12,
      idOwner: 12,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 13,
      text: "message",
      idDialog: 13,
      idOwner: 13,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 14,
      text: "message",
      idDialog: 14,
      idOwner: 14,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 15,
      text: "message",
      idDialog: 15,
      idOwner: 15,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 16,
      text: "message",
      idDialog: 16,
      idOwner: 16,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 17,
      text: "message",
      idDialog: 17,
      idOwner: 17,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 18,
      text: "message",
      idDialog: 18,
      idOwner: 18,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 19,
      text: "message",
      idDialog: 19,
      idOwner: 19,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 20,
      text: "message",
      idDialog: 20,
      idOwner: 20,
      createDate: newDate(),
    },
  ],
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
          arrayFriends.map((item: UserInterface, index: number) => (
            <DialogCard
              key={item.id}
              user={item}
              messages={arrayMessages[index]}
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
