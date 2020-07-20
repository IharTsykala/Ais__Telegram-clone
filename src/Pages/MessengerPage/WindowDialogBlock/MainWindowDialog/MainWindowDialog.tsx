import React from "react"
import { UserInterface } from "../../../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../../../Redux/InterfacesEntity/Message.Interface"
import MessageCard from "../../../../Components/MessageCard/MessageCard"

type MainWindowDialogProps = {
  idCurrentUser: number,
  arrayFriends: UserInterface[],
  arrayMessages: MessageInterface[][],
  dispatch: any,
}

const MainWindowDialog: React.FunctionComponent<MainWindowDialogProps> = ({
  idCurrentUser,
  arrayFriends,
  arrayMessages,
  dispatch,
}) => {
  return (
    <div className={"window-dialog-block__main"}>
      {arrayMessages.length &&
        arrayMessages[idCurrentUser - 1].length &&
        arrayMessages[idCurrentUser - 1].map((item: MessageInterface) => (
          <MessageCard
            key={item.id}
            idCurrentUser={idCurrentUser}
            friend={arrayFriends[idCurrentUser - 1]}
            message={item}
          />
        ))}
    </div>
  )
}

export default MainWindowDialog
