import React from 'react';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import {green, red} from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {Link} from 'react-router-dom';
import './Shop.css';

const useStyles = makeStyles(theme => ({


//this is for the icon    
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: green[800],
    },
  },
}));

export default function FontAwesome() {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    
    
    <Card className={classes.card}
       style={{width: '300px', height: '390px', marginTop: '6vh', display: 'flex', justifyContent: 'center', alignItems:'center'}}>


        <div className={classes.root}></div>


        <Icon className={clsx(classes.iconHover, 'fa fa-plus-circle')} 
        color="disabled" 
        style={{ fontSize: 75 }}/>

    </Card>  


  );
}