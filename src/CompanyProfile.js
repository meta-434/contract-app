import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateContract from './CreateContract.js';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import firebase from './firebase.js';

const useStyles = makeStyles(theme => ({
	button: {
		margin: 0,
		
	},
	myIcon: {
		marginLeft: -10,
		marginRight: 5,
	}
}));

const getData = () => {
	var uid = "Cm8Bc5MCK0Z1DITfDiHcbQU4wIk1" //firebase.auth().currentUser.uid;
	var info = [];
	firebase.database().ref('/users/company/' + uid).once('value').then( (snapshot) => {
		snapshot.forEach(child => {
			info.push(child.val());
		})
	});
	//console.log(info);

	return info;

};




function CompanyProfile() {
	const classes = useStyles();
	const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
	const contracts = getData();

  return (
    <div>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
				<Router>
					<Button component={AdapterLink} to="/CreateContract" variant="contained" color="primary" className={classes.button}>
					<Icon className={classes.myIcon}>add</Icon>
					Add New Contract
					</Button>
					<Route path="/CreateContract" component={CreateContract}/>
					<h1>Current Contracts</h1>
					{getData().map(entry => {
						console.log(entry)
						return <p>{"hi" + entry}</p>
						})}
            <List alignItems="flex-start">
								
                <ListItem>
                  <ListItemText
                    primary="Contract Title"
                  />
                </ListItem>
								<ListItem>
                  <ListItemText
                    primary={"Contract Detail"}
                  />
                </ListItem>

								
            </List>
				</Router>
        
    </div>
  );
}

export default CompanyProfile;
/*{getData().map(data => {
									{<ListItem>
                  <ListItemText
                    primary={data}
                  />
                </ListItem>}

								})}*/