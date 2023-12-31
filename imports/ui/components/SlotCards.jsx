import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SingleSlots from './SingleSlots'

import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import slotsCollection from '../../collection/slotsCollection'

import { toast, Toaster } from 'react-hot-toast';


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
        margin: "20px"

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



    const { slots, isLoading } = useTracker(() => {
        const handler = Meteor.subscribe('slot');

        if (!handler.ready) {
            return { isLoading: true, slots: [] }
        }

        const slots = slotsCollection.find({}).fetch()
        console.log(slots, "kitteeeeeeeeeeeeeeeee");
        return { slots, isLoading: false }
    })



    return (
        <>



            <Box className={classes.boxStyle}>
                Book Your Slots
                {
                    slots.map((slot) => (

                        <Paper className={classes.slots}>

                            <Typography className={classes.textStyle} >
                                {slot.category}
                            </Typography>
                            <Typography className={classes.rateStyle} >
                                Rate :  &#x20b9;{slot.price}
                            </Typography>
                            <Container>



                                <Grid container>
                                    {
                                        slot.singleSlots.map((singleSlot, index) => (
                                            <SingleSlots categoryId={slot._id} category={slot.category} price={slot.price} single={singleSlot} key={index} />
                                        ))
                                    }


                                </Grid>

                            </Container>





                        </Paper>
                    ))
                }
            </Box>


<Toaster/>
        </>
    )
}

export default SlotCards