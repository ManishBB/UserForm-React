import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

const Confirm = (props) => {

    const continues = e => {
        e.preventDefault();
        props.nextStep();
      };

    const back = e => {
        e.preventDefault();
        props.prevStep();
      };
        
      const {
        values: { firstName, lastName, email, occupation, city, bio }
      } = props;

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
}

export default Confirm
