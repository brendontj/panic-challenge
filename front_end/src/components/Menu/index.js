// Default React Imports
import React from 'react'
import './styles.css'

// Material Ui Imports
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'

// Material Ui Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  img: {
    margin: 'auto',
    marginLeft: '20%',
    display: 'left',
    maxWidth: '50%',
    maxHeight: '50%'
  }
}))

//Component
export default function Menu () {
  const classes = useStyles()
  return (
    <Container maxWidth='xl'>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              className={classes.img}
              alt='logo-panic'
              src='../logoInverted.png'
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
