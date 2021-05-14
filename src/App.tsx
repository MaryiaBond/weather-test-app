import React, { useState } from 'react';
import './App.scss';
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import AddCity from "./components/AddCity";
import UsersList from './components/UsersList';
import SwitchMetricSystem from './components/SwitchMetricSystem'
import data from './data/weather.json'
import { Weather } from "./types/types";

const App = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isImperialSystem, setIsImperialSystem] = useState<boolean>(true);
    const [usersList, setUsersList] = useState<Array<{ id: string, name: string, weather: Weather }>>(data);

    const addCity = (id: string) => {
        if (usersList.find(city => city.id === id)) return;
        const newCity = data.find(city => city.id === id);
        if(newCity) setUsersList([...usersList, newCity]);
    };
    const deleteCity = (id: string) => {
        setUsersList(usersList.filter(city => city.id !== id));
    };

  return (
    <div className="app-container">
        <SwitchMetricSystem setIsImperialSystem={setIsImperialSystem} isImperialSystem={isImperialSystem}/>
        {usersList.length !== data.length && <Button className='add-button' variant="contained" color="primary" onClick={() => setOpen(true)}>
            Add city
        </Button>}
        <UsersList usersList={usersList} deleteCity={deleteCity} isImperialSystem={isImperialSystem}/>
        <Dialog onClose={() => setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
            <AddCity usersList={usersList} setOpen={setOpen} addCity={addCity} />
        </Dialog>
    </div>
  );
};

export default App;
