import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const snackbarStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Form() {


	const snackStyle = snackbarStyles();
  const classes = useStyles();
  // SNACKBAR
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    // API FETCH DATA
    const [data, setData] = useState(null)
    const [username, setUsername] = useState('Gws')
    const fetchURL = "https://jsonplaceholder.typicode.com"
    
    const getData = () =>
    fetch(`${fetchURL}/users`)
    .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Title" />
        <TextField required id="standard-required" label="Required" defaultValue="Body" />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={username}
          onChange={handleChange}
          helperText="Please select your username"
        >
          {data?.map((option) => (
            <MenuItem key={option.id} value={option.username}>
              {option.username}
            </MenuItem>
          ))}
        </TextField>
		<div className={snackStyle.root}>
        <Button variant="contained" color="primary" onClick={handleClick}>Add Post</Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        	<Alert onClose={handleClose} severity="success">
          		This is a success message!
        	</Alert>
      	</Snackbar>
      		<Alert severity="error">This is an error message!</Alert>
      		<Alert severity="warning">This is a warning message!</Alert>
      		<Alert severity="info">This is an information message!</Alert>
      		<Alert severity="success">This is a success message!</Alert>
		</div>
      </div>
    </form>
  );
}
