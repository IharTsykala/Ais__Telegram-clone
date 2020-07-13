import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Avatar, Typography } from "@material-ui/core"
import patternAvatar from "../../assets/img/pattern-avatar.jpg"
import { UserInterface } from "../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../Redux/InterfacesEntity/Message.Interface"
import { setCurrentDialog } from "../../Redux/store/Dialog/Dialog.actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(2),
      },
    },
    avatar: {
      width: "50px",
      height: "50px",
    },
  })
)

type UserCardProps = {
  user: UserInterface,
  messages: MessageInterface[],
  idCurrentUser: number,
  dispatch: any,
}

const DialogCard: React.FunctionComponent<UserCardProps> = ({
  user,
  messages,
  idCurrentUser,
  dispatch,
}) => {
  const classes = useStyles()
  console.log(messages)
  return (
    <div
      className={
        (idCurrentUser === user.id &&
          `user-card ${classes.root} user-card_current`) ||
        `user-card ${classes.root}`
      }
      onClick={() => dispatch(setCurrentDialog(user.id))}
    >
      <div className={"user-card__avatar-container"}>
        <Avatar alt="avatar" src={patternAvatar} className={classes.avatar} />
      </div>
      <div className={"user-card__information-container"}>
        <div className={"user-card__header"}>
          <div className={"user-card__name"}>
            <Typography
              variant={"subtitle1"}
            >{`${user.name}${user.id}`}</Typography>
          </div>
          <div className={"user-card__date"}>
            <Typography variant={"overline"}>{`${
              messages[messages.length - 1].createDate
            }`}</Typography>
          </div>
        </div>
        <div className={"user-card__text"}>
          <Typography variant={"caption"}>{`${
            messages[messages.length - 1].text
          }${messages[messages.length - 1].idOwner}`}</Typography>
        </div>
      </div>
    </div>
  )
}

export default DialogCard
