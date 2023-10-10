import React from 'react'
import MenuAppBar from '../../components/NavBar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import SlotCards from '../../components/SlotCards'


const useStyles = makeStyles({

})

function HomePage(props) {
  const classes = useStyles(props)
  return (
    <>
      <MenuAppBar />
      <SlotCards/>

    </>
  )
}

export default HomePage