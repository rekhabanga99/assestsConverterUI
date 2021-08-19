
import React, { Fragment, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles(theme =>
({

    select: {

        '& .MuiInput-underline:before': {
            borderBottom: 'none',

        }, '& .MuiInput-underline:after': {
            borderBottom: 'none',
        }
    }

}))
const ComboBox = (props) => {
    const classes = useStyles();
    const { data, getOptionSelected, obj, setToObj, toObj } = props

    useEffect(() => {
    }, [props.obj])


    return (
        <Autocomplete
            id="multiple-limit-tags"
            options={data}
            value={obj && obj.title ? [obj.title] : toObj && toObj.title ? [toObj.title]: ''}
            inputValue={obj && obj.title ? obj.title : toObj && toObj.title ? toObj.title : ''}
            getOptionLabel={(option) => {
                return option.title
            }}

            onChange={(event, newValue) => {
                if (getOptionSelected) {
                    getOptionSelected(event, newValue)
                }
                if (setToObj) {
                    setToObj(event, newValue)
                }
            }}
            // onSelect={(e=>getOptionSelected(e))}

            renderOption={option => {
                return (
                    <Fragment>
                        <IconButton color="primary">
                            <img  alt="" src={`${window.location.origin}/img/${option.img}`} />{/*Mock image, attribute in option*/}
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



export default ComboBox;
