import Card from '@material-ui/core/Card'
import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import toast from 'react-hot-toast'






function SingleSlots({ props, single, index, price, category,categoryId }) {


    const useStyles = makeStyles({
        singleSlotsCardStyle: {
    
            margin: "10px",
            fontSize: "20px",
            width: "50px",
            height: "50px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:single.bookingStatus? "red": '#b0aeae',
            color: 'white',
            transition: 'background-color 0.3s',
            '&:hover': {
                backgroundColor: '#7a7878',
            },
    
    
        },
        boxStyle: {
            backgroundColor: 'white',
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            borderRadius: "2px",
            width: "500px",
            backgroundImage: ' linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)',
    
    
        },
        modalStyle: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
        },
        buttonStyle: {
            marginTop: "10px",
            transition: 'background-color 0.3s',
            '&:hover': {
                backgroundColor: 'green',
            },
    
        },
        fontStyle: {
            fontFamily: 'Luckiest Guy, cursive',
            fontSize: "2rem",
            color: 'white'
    
        }
    })




    const classes = useStyles(props)
    const [open, setOpen] = React.useState(false);
    const [bookedOpen, setBookedOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const confirmBooking = () => {
       console.log("confirm booking");
       console.log(single);
        Meteor.call('slotsCollection.booked',{seatNumber:single.seatNumber-1,userId:Meteor.userId(),categoryId},(err)=>{
            if(err){
                console.log("error occured while buy");
                return
            }
            toast.success("booked the slot successfully")
            console.log("saved");
            setOpen(false)
        })
    }


    const confirmSell=()=>{
        console.log(categoryId,"categroy id");
        Meteor.call('slotCollection.remove',{seatNumber:single.seatNumber-1,id:categoryId},(err)=>{
            if(err){
                console.log("error occured while sell");
                return
            }
            toast.success("sold the slot successfully")
            setOpen(false)

        })
    }

    return (
        <>


            <Grid key={index} item xs={2}>

                <Grid item md={4}>

                    <Card style={{backgroundColor:single.bookingStatus?"red":"#b0aeae"}}  className={classes.singleSlotsCardStyle} onClick={handleOpen}>
                        {single.seatNumber}
                    </Card>
                </Grid>

                <Modal
                    className={classes.modalStyle}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Box className={classes.boxStyle} >
                        <h4 className={classes.fontStyle} >Book My Slot </h4>
                        <h2>Confirm Your Ticket</h2>
                        <h3>Seat No : {single.seatNumber}</h3>
                        <h3>Category : {category}</h3>
                        <h3>Price : {price}</h3>
          
                        {
                           

                        }


                        
                        {single.bookingStatus? single.bookedUser === Meteor.userId()?<Button onClick={confirmSell} style={{backgroundColor:"green"}} className={classes.buttonStyle} variant='contained'>
                           sell
                        </Button >:  (
                            <Button style={{backgroundColor:"red"}} className={classes.buttonStyle} variant='contained'>
                           Slot Already Booked
                        </Button >

                        )
                        :<Button  className={classes.buttonStyle} variant='contained' onClick={ confirmBooking }>
                            buy slot
                        </Button >}
                    </Box>
                </Modal>
            </Grid>
        </>

    )
}

export default SingleSlots