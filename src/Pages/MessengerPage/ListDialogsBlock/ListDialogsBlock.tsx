import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { InputBase } from "@material-ui/core"
import DialogCard from "../../../Components/DialogCard/DialogCard"
import { UserInterface } from "../../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../../Redux/InterfacesEntity/Message.Interface"
import { connect } from "react-redux"

type ListDialogsBlockProps = {
  idCurrentUser: number,
  arrayFriends: UserInterface[],
  arrayMessages: MessageInterface[][],
  dispatch: any,
}

const ListDialogsBlock: React.FunctionComponent<ListDialogsBlockProps> = ({
  idCurrentUser,
  arrayFriends,
  arrayMessages,
  dispatch,
}) => {
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
              idCurrentUser={idCurrentUser}
              dispatch={dispatch}
            />
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  idCurrentUser: state.dialog.idCurrentUser,
  arrayFriends: state.user.arrayFriends,
  arrayMessages: state.message.arrayMessages,
})

export default connect(mapStateToProps)(ListDialogsBlock)
