import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


const FormUserDetails = (props) => {

    const continues = (e) =>{
        e.preventDefault();
        props.nextStep();
    };

    const [value, setValue] = React.useState(null);

    
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
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Registration Form
                        </Typography>
                        <Typography variant="h8" component="div" >
                            User Details
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                    <TextField
                    placeholder="Enter Your First Name"
                    label="First Name"
                    name = "firstName"
                    onChange={handleChange}
                    defaultValue={values.firstName}
                    margin="normal"
                    fullWidth
                    required
                    />
                    <br />
                    <TextField
                    placeholder="Enter Your Last Name"
                    label="Last Name"
                    name = "lastName"
                    onChange={handleChange}
                    defaultValue={values.lastName}
                    margin="normal"
                    fullWidth
                    />
                    <br />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date of Birth"
                            value={values.dateOfBirth}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <br />
                    <TextField
                    placeholder="Enter Your Email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
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
