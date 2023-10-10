import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Meteor } from 'meteor/meteor';
import Box from "@material-ui/core/Box";
import  Button from "@material-ui/core/Button";
import  Grid from "@material-ui/core/Grid";
import Typography  from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paperStyle: {
    padding: 20,
    minHeight: '60vh', // Adjusted to minHeight to keep the content centered
    width: 400,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Vertically center the content
    backgroundImage:"linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)"
  },
    gridStyle:{
      backgroundImage: 'url("https://img.freepik.com/free-vector/prickly-juniper-branch-beige-gray-minimal-background_53876-113047.jpg")',
      backgroundSize: 'cover',
      height: '100vh',
    },
    loginText:{
      fontWeight: 'bold', color: 'black',
    

    },
    loginButton:{
      marginTop: 20,
    },
    formStyle:{
      display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'
    },
    typoStyle:{
      fontFamily: 'Luckiest Guy, cursive',
      fontSize:"30px"
    }
});


function LoginPage(props) {

  const classes = useStyles(props);
  const navigate=useNavigate()


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();
console.log("logggg");
    Meteor.loginWithPassword(username, password);
    navigate("/")

  };

  return (
    <Grid
    className={classes.gridStyle}
      container
      justifyContent="center"
      alignItems="center">
     
      <Paper elevation={10} className={classes.paperStyle}>
      <Typography  className={classes.typoStyle}>
        Book Your SLot
      </Typography>
        <Box align="center">
          <Typography variant="h4" className={classes.loginText} >
            LOGIN 
          </Typography>
        </Box>

        <form className={classes.formStyle} onSubmit={submit} >
          <TextField
            name="userName"
            id="standard-basic"
            label="Username"
            type="text"
            placeholder="Enter Username"
            variant="standard"
            fullWidth
            onChange={e => setUsername(e.target.value)}
          />

          <TextField
            name="password"
            id="standard-basic"
            label="Password"
            type="password"
            placeholder="Enter Password"
            variant="standard"
            fullWidth
            onChange={e => setPassword(e.target.value)}

          />

        <Button type="submit" variant="outlined" className={classes.loginButton}>
          Login
        </Button>
        </form>

      
      </Paper>
    </Grid>
  );
}

export default LoginPage;