import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';


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
        width: 200,
        flexBasis: 200,
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    root: {
        padding: theme.spacing(3, 2),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
}));

function StudentBid(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        // name: 'Cat in the Hat',
        // age: '',
        // multiline: 'Controlled',
        // currency: 'EUR',
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
   
        return (
            <div>
                {/* Somehow render details of contract selected from StudentContracts.js */}
                <Paper className={classes.root}>
                    <Typography variant="h3" component="h3">
                        Contract Details
                    </Typography>
                </Paper>
               
                <p>query contract details from selected contract here</p>

                <Paper className={classes.root}>
                    <Typography variant="h3" component="h3">
                        Submit Your Bid
                    </Typography>
                </Paper>

                {/* Submit a bid for that contract to the company (once approved?) */}
                <form className={classes.container} noValidate autoComplete="off">
                <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    {/* <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        rowsMax="4"
                        value={values.multiline}
                        onChange={handleChange('multiline')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    /> */}
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                        <Input
                            id="adornment-amount"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </form>

                <Button variant="contained" className={classes.button}>
                    Submit
                </Button>
            </div>
        )
    
}

export default StudentBid
