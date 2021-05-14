import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import data from './../data/weather.json';
import {Weather} from "../types/types";


interface AddCityProps {
    setOpen: (open: boolean) => void,
    addCity: (id: string) => void,
    usersList: Array<{ id: string, name: string, weather: Weather }>,
}

const AddCity = ({setOpen, addCity, usersList} : AddCityProps) => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(6),
            minWidth: 320,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const handleChange = (event: any) => {
        addCity(event.currentTarget.dataset.value);
        setOpen(false)
    };
    return (
        <FormControl className={classes.formControl}>
            <TextField
                select
                id="city"
                label="Choose city"
                value={''}
                onChange={handleChange}
                margin="dense"
                variant="outlined"
                fullWidth
            >
                {data.filter(city => !usersList.find(element => element.id === city.id)).map(city => (
                    <MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>
                ))}
            </TextField>
        </FormControl>
    )
};

export default AddCity;
