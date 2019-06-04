import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateContract from './CreateContract.js';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
	button: {
		margin: 0,
	},
	myIcon: {
		marginLeft: -10,
		marginRight: 5,
	}
}));


export default function MyButton() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button}>
                <Icon className={classes.myIcon}>add</Icon>
                {this.props.buttonText}
            </Button>
        </div>
    );

}

