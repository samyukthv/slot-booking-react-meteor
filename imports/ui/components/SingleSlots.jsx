import Card from '@material-ui/core/Card'
import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    singleSlotsCardStyle: {
        margin: "10px",
        fontSize: "20px",
        width: "50px",
        height: "50px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b0aeae',
        color: 'white',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#7a7878',
        },


    },
    boxStyle:{
        backgroundColor:'white',
        position:"absolute",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        padding:"30px",
        borderRadius:"2px",
        width:"500px",
        backgroundImage: ' linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)',


    },
    modalStyle:{
     display:'flex',
     justifyContent:"center",
     alignItems:"center"
    },
    buttonStyle:{
        marginTop:"10px",
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: 'green',
        },
       
    },
    fontStyle:{
        fontFamily: 'Luckiest Guy, cursive',
        fontSize:"2rem",
        color:'white'

    }
})

function SingleSlots(props) {
    const classes = useStyles(props)
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

 
    return (
        <>

            <Grid item xs={2}>

                <Card className={classes.singleSlotsCardStyle} onClick={handleOpen}>
                    1
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
           <h2>user id</h2>
           <h3>Seat No : seat number</h3>
           <h3>Category : category</h3>
           <h3>Price : price</h3>
           <Button className={classes.buttonStyle}  variant='contained' onClick={()=>setOpen(false)}>
               buy slot
           </Button >
        </Box>
            </Modal>
        </>

    )
}

export default SingleSlots