import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Container, makeStyles } from '@material-ui/core'
import SingleSlots from './SingleSlots'


const useStyles = makeStyles({
    boxStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: "3rem",
        paddingTop: "20px",
        fontWeight: "bolder",
        color: "white",
        backgroundImage: ' linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)'
    },
    slots: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "30vw",
        height: "auto",
        paddingTop: "30px",
        paddingBottom: "30px",
        margin:"20px"

    },
    textStyle: {
        fontWeight: 'bolder',
        fontSize: "20px"
    },
    gridStyle: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    rateStyle: {
        color: 'red',

    }
})

function SlotCards(props) {
    const classes = useStyles(props)
    return (
        <>
            <Box className={classes.boxStyle}>
                Book Your Slots
                <Paper className={classes.slots}>
                    <Typography className={classes.textStyle} >
                        Platinum
                    </Typography>
                    <Typography className={classes.rateStyle} >
                        Rate :  &#x20b9;350
                    </Typography>
                    <Container>

                        <Grid container>

                            {/* <Grid item xs={3} spacing={2} > */}


                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />
                            <SingleSlots />

                            {/* </Grid> */}
                        </Grid>

                    </Container>





                </Paper>
            </Box>

        </>
    )
}

export default SlotCards