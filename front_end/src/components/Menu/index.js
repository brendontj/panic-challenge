// Default React Imports
import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom';

// Material Ui Imports
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Material Ui Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
    img: {
    margin: 'auto',
    marginLeft: '5px%',
    display: 'left',
    maxWidth: '30%',
    maxHeight: '30%'
  }
}));


//Component
export default function Menu() {
  const classes = useStyles()

 
  return (
    <Container maxWidth='xl'>
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
          <img
              className={classes.img}
              alt='logo-panic'
              src='../logoInverted.png'
            />
            <Typography variant="h4" className={classes.title}>
              Intership Challenge
          </Typography>
            <Button 
              component = {Link} to="/cadastro/"
              color="inherit" 
            >
              Inserir Candidato
            </Button>
          </Toolbar>
        </AppBar>
      </div>


    </Container>
  );
}
