import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormPersonalDetails = (props) => {

    const continues = e => {
        e.preventDefault();
        props.nextStep();
      };

    const back = e => {
        e.preventDefault();
        props.prevStep();
      };
        
    const { values, handleChange } = props;

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              name = "occupation"
              onChange={handleChange}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              name="city"
              onChange={handleChange}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              name="bio"
              onChange={handleChange}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={continues}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
}

export default FormPersonalDetails
