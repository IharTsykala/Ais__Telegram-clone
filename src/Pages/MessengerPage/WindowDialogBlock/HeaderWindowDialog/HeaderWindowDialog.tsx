import React from "react"
import { Typography } from "@material-ui/core"
import { UserInterface } from "../../../../Redux/InterfacesEntity/User.Interface"
import SearchIcon from "@material-ui/icons/Search"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import MoreVertIcon from "@material-ui/icons/MoreVert"

type HeaderWindowDialogProps = {
  idCurrentUser: number,
  arrayFriends: UserInterface[],
}

const HeaderWindowDialog: React.FunctionComponent<HeaderWindowDialogProps> = ({
  idCurrentUser,
  arrayFriends,
}) => {
  return (
    <div className={"window-dialog-block__current-dialog-information"}>
      <div className={"window-dialog-block__header"}>
        <div className={"window-dialog-block__header-information"}>
          <Typography
            variant={"caption"}
            className={"window-dialog-block__header-information-name"}
          >
            {`${arrayFriends[idCurrentUser - 1].name}${
              arrayFriends[idCurrentUser - 1].id
            }`}
          </Typography>
          <Typography
            variant={"caption"}
            className={"window-dialog-block__header-information-members"}
          >
            2 members
          </Typography>
        </div>
        <div className={"window-dialog-block__header-menu"}>
          <SearchIcon />
          <ChromeReaderModeIcon />
          <MoreVertIcon />
        </div>
      </div>
    </div>
  )
}

export default HeaderWindowDialog
