import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  },
}));

export default function SearchBar(props) {

    const [value, setValue] = useState('')
    const classes = useStyles();

    return (
        <div
            style={{
                marginBottom: '5%',
                display: 'flex',
                justifyContent: 'space-around'
            }}
        >
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                id="standard-secondary" 
                label="search" 
                color="grey"
                onChange={event=>{
                    setValue(event.target.value);
                    props.getCoctailsByName(value)
                }}
                />
            </form>
                <div style={{
                    marginTop: '2%'
                }}>
                    <FormControl className={classes.formControl}>
                        <Select
                        onChange={
                        (event) => props.filterByAlc(event.target.value)
                        }
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value='All' default>All</MenuItem>
                        <MenuItem value='Alcoholic'>Alcoholic</MenuItem>
                        <MenuItem value='Non_Alcoholic'>Non_Alcoholic</MenuItem> 
                        </Select>
                    </FormControl>
                </div>    
        </div>
    )
}
