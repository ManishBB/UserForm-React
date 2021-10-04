import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormUserDetails = (props) => {

    const continues = (e) =>{
        e.preventDefault();
        props.nextStep();
    };

    const { values, handleChange } = props;

    return (
        <div>
            <MuiThemeProvider>
                <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <AppBar title="Enter User Details" />
                    <TextField
                    placeholder="Enter Your First Name"
                    label="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    margin="normal"
                    fullWidth
                    />
                    <br />
                    <TextField
                    placeholder="Enter Your Last Name"
                    label="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    margin="normal"
                    fullWidth
                    />
                    <br />
                    <TextField
                    placeholder="Enter Your Email"
                    label="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    margin="normal"
                    fullWidth
                    />
                    <br />
                    <Button
                    color="primary"
                    variant="contained"
                    onClick={continues}
                    >Continue</Button>
                </Dialog>
                </>
            </MuiThemeProvider>
        </div>
    )
}

export default FormUserDetails
