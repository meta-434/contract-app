import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function DenseAppBar() {
  //should be used for chip only
  function handleDelete() {
    console.log("This will log you out.");
  }
  //should be used to visit your profile (only from chip)
  function handleClick(e) {
    console.log("this will take you to your profile");
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    console.log("click triggered")
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    console.log("close triggered")
    setAnchorEl(null);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>

          <Typography variant="h6" color="inherit" className={classes.title}>
            RevTek Internships
          </Typography>
          <Tooltip title="Profile Information">
            <Chip
              size="small"
              avatar={<Avatar>SS</Avatar>}
              label="Sample Student"
              clickable
              className={classes.chip}
              onClick={handleClick} // visit my profile
              color="primary"
              onDelete={handleDelete} // sign out
            />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default DenseAppBar;
