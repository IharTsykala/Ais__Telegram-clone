import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { InputBase } from "@material-ui/core"
import DialogCard from "../../../Components/DialogCard/DialogCard"
import { UserInterface } from "../../../Redux/InterfacesEntity/User.Interface"

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
