import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Shop.css';
import AddFormModule from './AddFormModule'

const useStyles = makeStyles(theme => ({


//this is for the icon    
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }, 
  card: {  
    width: '300px',
    height: '390px',
    marginTop: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column'
  },

}));

export default function AddCardButton() {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    
    
  
    <Card className={classes.card}>
    <div> Add new item </div>

        <div className={classes.root}></div>

    <AddFormModule/>
    </Card>  
    

  );
}