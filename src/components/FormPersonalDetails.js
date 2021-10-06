import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { FormControlLabel } from '@mui/material';

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
                            Personal Details
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
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

            <FormGroup>
                  <FormLabel component="legend">Education</FormLabel>
                            <FormControlLabel control={<Checkbox />} label="10th/SSC" />
                            <FormControlLabel control={<Checkbox />} label="12th/HSC" />
                            <FormControlLabel control={<Checkbox />} label="Diploma" />
                            <FormControlLabel control={<Checkbox />} label="Graduate" />
                    </FormGroup>
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
