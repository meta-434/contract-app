import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

// material UI setup & text field setup
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

function StudentBid(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      });
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
   
        return (
            <div>
                {/* Somehow render details of contract selected from StudentContracts.js */}
                <h1>Contract Details</h1>

                {/* Submit a bid for that contract to the company (once approved?) */}
                <h1>Submit Your Bid</h1>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="4"
                        value={values.multiline}
                        onChange={handleChange('multiline')}
                        className={classes.textField}
                        margin="normal"
                        helperText="hello"
                        variant="outlined"
                    />
                </form>

                <Button variant="contained" className={classes.button}>
                    Submit
                </Button>
            </div>
        )
    
}

export default StudentBid
