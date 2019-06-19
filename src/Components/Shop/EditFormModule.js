import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import {green, red} from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
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

export default function EditFormModule(props) {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const [title, setTitle] = React.useState();
  const [image_url, setImage] = React.useState();
  const [category, setCategory] = React.useState();
  const [price, setPrice] = React.useState();
  const [description, setDescription] = React.useState();
  const [features, setFeatures] = React.useState();


  function handleClickOpen() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  function handleEditSave(){
    // let { title, image, category, price, description, features, } = ;

    axios
        .put('/api/shop', { id:props.slow_shop.id, title:title, image_url:image_url, category:category, price:price, description:description, features:features })
        .then (response => {
            console.log(response)
            props.getProducts()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`Form-axiosPost: ${error}`))

  }

  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

//   handleSubmit() {
//     let { title, image, category, price, description, features, } = useState;
//     axios
//         .post('/api/shop', { title:title, image:image, category:category, price:price, description:description, features:features })
//         .then(this.setState({ redirect:true }))
//         .catch(error => console.log(`Form-axiosPost: ${error}`))
// }




  return (
    <div>

{/* EDIT button      */}
          <IconButton aria-label="Info"
          onClick={() => props.editOneFn(props.id)}
          onClick={handleClickOpen}
          >
            <MoreVertIcon />
          </IconButton>
  
{/* Pop up EDIT modal */}

      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" >
          
        <DialogTitle id="form-dialog-title">EDIT sale item</DialogTitle>

        <DialogContent style={{ paddingLeft: "4vw", paddingRight: "4vw"}}>
          <DialogContentText>
            Please enter the following information about your item for sale:
          </DialogContentText>


{/* title */}
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title for ad - 200 character limit"
            type="title"
            fullWidth
            onChange = {(e) => setTitle(e.target.value)}
            defaultValue = {props.slow_shop.title}
          />
{/* image url */}
        <TextField
            autoFocus
            margin="dense"
            id="image_url"
            label="Image URL - links to pictures only"
            type="image_url"
            fullWidth
            onChange = {(e) => setImage(e.target.value)}
            defaultValue = {props.slow_shop.image_url}
          />
{/* category */}
        <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="category"
            fullWidth
            onChange = {(e) => setCategory(e.target.value)}
            defaultValue = {props.slow_shop.category}
          />
{/* price */}
        <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price - (number with 2 decimal places)"
            type="price"
            fullWidth
            onChange = {(e) => setPrice(e.target.value)}
            defaultValue = {props.slow_shop.price}
          />         

{/* description */}
        <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Brief Description"
            type="description"
            fullWidth
            onChange = {(e) => setDescription(e.target.value)}
            defaultValue = {props.slow_shop.description}
          />

{/* features */}
        <TextField
            autoFocus
            margin="dense"
            id="features"
            label="Longer Description featured in expanded view"
            type="features"
            fullWidth
            onChange = {(e) => setFeatures(e.target.value)}
            defaultValue = {props.slow_shop.features}
          />


        </DialogContent>

        <DialogContent>
          {/* <DialogContentText>
            Title on for sale item.
          </DialogContentText> */}

        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}