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
const classes = makeStyles(theme => ({
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
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 20,
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



class StudentBid extends React.Component {

    state = {
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    }

    render(){

    
        return (
            <div>
                {/* Somehow render details of contract selected from StudentContracts.js */}
                <Typography variant="h3" component="h3">
                    Contract Details
                </Typography>
             
                <p style={{paddingLeft:20, paddingBottom:20,}}> ~query contract details from selected contract here~ </p>

                <Typography variant="h3" component="h3">
                    Submit Your Bid
                </Typography>
                
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
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                        <Input
                            id="adornment-amount"
                            value={this.state.amount}
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    <Button variant="contained" className={classes.button}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }    
}

export default StudentBid
