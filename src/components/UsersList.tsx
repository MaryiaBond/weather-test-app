import React from 'react';
import Button from "@material-ui/core/Button";
import { Weather } from './../types/types'



interface UsersListProps {
    usersList: Array<{ id: string, name: string, weather: Weather }>,
    isImperialSystem: boolean,
    deleteCity: (id: string) => void,
}

export default ({usersList, deleteCity, isImperialSystem} : UsersListProps) => {
    const getTemperature = (temp: number) => {
        return isImperialSystem ? temp + '°F': ((temp - 32) * 5/9).toFixed(2) + '°C';
    };
    const getWindSpeed = (speed: number) => {
        return isImperialSystem ? speed + ' mph': (speed/2.237).toFixed(2) + ' m/s';
    };
    const getVisibility = (visibility: number) => {
        return isImperialSystem ? visibility + ' miles': visibility*1609 + ' m';
    };
    return (
        <div>
            {usersList.length ?
                usersList.map(city => (
                <div key={city.id} className='list-row'>
                    <h3>{city.name}</h3>
                    <div><b>Temperature: </b>
                        {getTemperature(city.weather.temperature.actual)}
                    </div>
                    <div>
                        <p><b>Wind speed: </b>{getWindSpeed(city.weather.wind.speed)}</p>
                        <b>Wind deg: </b>{city.weather.wind.deg}°
                    </div>
                    <div>
                        <p><b>Clouds: </b>{city.weather.clouds.all}</p>
                        <p><b>Visibility: </b>{getVisibility(city.weather.clouds.visibility)}</p>
                        <b>Humidity: </b>{city.weather.clouds.humidity}%
                    </div>
                    <Button variant="contained" onClick={() => deleteCity(city.id)}>
                    Delete
                    </Button>
                </div>
            )): <h2>There are no countries yet</h2>}
        </div>
    )
}
