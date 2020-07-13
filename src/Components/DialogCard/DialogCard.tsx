import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Avatar, Typography } from "@material-ui/core"
import patternAvatar from "../../assets/img/pattern-avatar.jpg"
import { UserInterface } from "../../Redux/InterfacesEntity/User.Interface"
import { MessageInterface } from "../../Redux/InterfacesEntity/Message.Interface"

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
  // dispatch: any,
}

const DialogCard: React.FunctionComponent<UserCardProps> = ({
  user,
  messages,
}) => {
  const classes = useStyles()
  console.log(messages)
  return (
    <div className={`user-card ${classes.root}`}>
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

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default DialogCard
