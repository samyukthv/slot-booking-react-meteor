import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles({
    gradientText:{
        backgroundImage:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,38,143,1) 28%);",
    WebkitBackgroundClip: "text",

    display: "inline-block",
    fontWeight: "bold",
    fontFamily: 'YourCustomFont, cursive',
    },
})


import React from "react";

function Banner(props) {
   
const classes=useStyles(props)

 

    const theme = createTheme();

    theme.typography.h2 = {
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
            fontSize: '1.8rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
    };

    theme.typography.h5 = {
        fontSize: '1rem',
        '@media (min-width:600px)': {
            fontSize: '0.8rem',

        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    }


    return (

        <Box
            style={{
                height: 600,
                backgroundImage: 'url("https://img.freepik.com/free-vector/prickly-juniper-branch-beige-gray-minimal-background_53876-113047.jpg")',
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
            }}
        >


            <div style={{ display: "inline" }}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h2" component="h2" color="" style={gradientText}>
                        "Book Your Slots with Ease!"





                    </Typography>

                    <Typography


                        variant="h5"
                        style={{
                            margin: "30px",
                            fontWeight: "bold",
                            backgroundImage:
                                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(110,38,143,1) 33%)",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                            fontWeight: "bold",
                        }}
                    >
                        "Streamline your scheduling experience with our user-friendly slot booking app.
                        Conveniently reserve appointments, classes, and services in just a few clicks.
                        Simplify your life today!"
                    </Typography>
                </ThemeProvider>
            </div>
            {/* <div style={overlayStyle}></div> */}
        </Box>
    );
}

export default Banner;