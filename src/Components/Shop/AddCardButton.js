import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Shop.css';
import AddFormModule from './AddFormModule'
// import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({


//this is for the icon    
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }, 
  card: {  
    width: '300px',
    height: '420px',
    marginTop: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(245,245,245,0.9)',
  },

}));

export default function AddCardButton(props) {
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

    <AddFormModule getProducts = {props.getProducts}/>
    </Card>  
    

  );
}