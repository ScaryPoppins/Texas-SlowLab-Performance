import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {Link} from 'react-router-dom';
import './Shop.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditFormModule from './EditFormModule'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(360deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(540deg)',
  },
//   avatar: {
//     backgroundColor: red[500],
//   },
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));


export default function ShopCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}
       style={{width: '300px', minHeight: '390px', marginTop: '6vh'}}>

      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" 
            src="https://cdn3.iconfinder.com/data/icons/various-reactions-when-talking-on-phone/280/talking-phone-reaction-007-512.png" 
            className={classes.avatar} />
        }
        
//potential add to cart icon
        // action={
        //     <Link to='/shop' onClick={() => props.deleteOneFn(props.id)}>
        //     <IconButton aria-label="Info">
        //       <MoreVertIcon />
        //     </IconButton>
        //   </Link>
        // }


        title= {props.title} 
        subheader={props.category}
 
     />     
      <CardMedia
        className={classes.media}
        image= {props.image_url}
        title="sale image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          What's in the box: <br/>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
{/* bottom left corder      */}

        {/* <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton> */}

{/* share with social media */}
        {/* <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton> */}



{/* delete button */}
        <Link to='/shop' onClick={() => props.deleteOneFn(props.id)}>
            <IconButton  aria-label="Delete" >
                <DeleteOutlinedIcon />
            </IconButton>
        </Link>

{/* old edit button */}
        {/* <Link to='/shop' onClick={() => props.editOneFn(props.id)}>
          <IconButton aria-label="Info">
            <MoreVertIcon />
          </IconButton>
        </Link> */}


{/* new edit button */}


<EditFormModule/>




        <h2> ${props.price}</h2>



        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
    
          <Typography paragraph>
            {props.features}
          </Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
