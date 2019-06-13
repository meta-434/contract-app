import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

DenseAppBar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  //should be used for chip only
  function handleChipDelete() {
    console.log("This will log you out.");
  }
  //should be used to visit your profile (only from chip)
  function handleChipClick() {
    console.log("this will take you to your profile");
  }
  //soley for opening menu
  function handleClick(event) {
    console.log("click triggered");
    setAnchorEl(event.currentTarget);
  }
  //for click away
  function handleClose() {
    console.log("close triggered");
    window.history.go();
    setAnchorEl(null);
  }
  //for profile selection
  function handleClickProfile() {
    return;
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar variant="dense">
            <div>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon color="disabled" />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link
                  to="/Home"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link
                  to="/StudentProfile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link
                  to="/Contracts"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Open Contracts</MenuItem>
                </Link>
                <Link
                  to="/logout"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Logout</MenuItem>
                </Link>
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
                onClick={handleChipClick} // visit my profile
                color="primary"
                onDelete={handleChipDelete} // sign out
              />
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Router>
    </div>
  );
};
export default DenseAppBar;
