import React, { useState } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Avatar, Typography } from "@material-ui/core"
import patternAvatar from "../../assets/img/pattern-avatar.jpg"
import { UserInterface } from "../../Redux/InterfacesEntity/UserInterface"

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
  // dispatch: any,
}

const DialogCard: React.FunctionComponent<UserCardProps> = ({ user }) => {
  const classes = useStyles()
  return (
    <div className={`user-card ${classes.root}`}>
      <div>
        <Avatar alt="avatar" src={patternAvatar} className={classes.avatar} />
      </div>
      <div>
        <Typography
          variant={"subtitle1"}
        >{`${user.name}${user.id}`}</Typography>
      </div>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default DialogCard
