
import React,{Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Eth from '../img/eth.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => 
({
  
    select: {
    
        '& .MuiInput-underline:before':{
            borderBottom:'none',
        
        },'& .MuiInput-underline:after':{
            borderBottom:'none',
        }
    }

    }))
const  ComboBox =()=> {
    const classes = useStyles();
  return (
  

<Autocomplete
    multiple
    limitTags={2}
    id="multiple-limit-tags"
    options={top100Films}
    getOptionLabel={(option) => option.title}
    renderTags={options => 
    {
        return (
            options.map(option =>
                <Fragment>
                    <IconButton color="primary">
                        <img src={'../img/eth.jpg'}/> {/*Mock image, attribute in option*/}
                    </IconButton>
                        {option.title}
                </Fragment>))

    }}
    renderOption={option => {
        return (
            <Fragment>
                    <IconButton color="primary">
                        <img src={'../img/eth.jpg'}/> {/*Mock image, attribute in option*/}
                    </IconButton>
                {option.title}
            </Fragment>
        );
    }}
    renderInput={(params) => (
        <TextField 
          className={classes.select}
            {...params}
           
            label="" 
            placeholder="" 
        />
    )}
  />


  );
}

const top100Films = [

  { title: 'Logan', year: 2017 },
  { title: 'Full ', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The ', year: 1973 },
  { title: '2001: ', year: 1968 },
  { title: "Singin", year: 1952 },
  { title: 'Toy ', year: 1995 },
  { title: 'Bicycle ', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglo', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty ', year: 1975 },
];

export default ComboBox;
