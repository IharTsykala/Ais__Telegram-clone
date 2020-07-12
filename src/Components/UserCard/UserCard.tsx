import React, { useState } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import patternAvatar from "../../assets/img/pattern-avatar.jpg"

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
  // dispatch: any,
}

const UserCard: React.FunctionComponent<UserCardProps> = () => {
  const classes = useStyles()
  return (
    <div className={`user-card ${classes.root}`}>
      <div>
        <Avatar alt="avatar" src={patternAvatar} className={classes.avatar} />
      </div>
      <div></div>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default UserCard
