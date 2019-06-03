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
  function handleDelete() {
    console.log("This will log you out.");
  }

 function handleMenuChoice(e) {
    console.log(e.target.id)
    console.log("This will eventually redirect to unique pages.");
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick (e) {
    console.log("the menu has been pressed");
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            aria-haspopup="true"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleClick}
          >
            <MenuIcon />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleMenuChoice}>Profile</MenuItem>
              <MenuItem onClick={handleMenuChoice}>Marketplace</MenuItem>
              <MenuItem onClick={handleMenuChoice}>Contracts</MenuItem>
            </Menu>
          </IconButton>
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
