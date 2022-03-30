import axios from 'axios';

export const getLocations = async(lat:number, long:number) =>{
        const results = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`);

        return results.data
}

export const getForecast = async(id:number) =>{
        const results = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`);

        return results.data.consolidated_weather
}