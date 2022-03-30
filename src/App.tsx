import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { getLocations, getForecast } from './actions';
import Forecast from './components/forecast';
import Locations from './components/locations';
import { ILocation } from './interfaces';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '30px',
            fontWeight: 500,
            textAlign: 'center',
            marginTop: '40px'
        },
        h2: {
            fontSize: '30px',
            fontWeight: 500,
            textAlign: 'center',
            marginTop: '40px'
        },
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default function App() {
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [forecast, setForecast] = React.useState([]);
    const [locations, setLocations] = React.useState([]);
    const [selectedLocation, setSelectedLocation] = React.useState('');

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }, [])

    React.useEffect(() => {
        if (latitude && longitude) {
            getLocations(latitude, longitude).then(data => {
                setLocations(data)
            })
        }
    }, [latitude, longitude])

    const setLocation = async (location: ILocation) => {
        const forecast = await getForecast(location.woeid);

        try {
            setForecast(forecast.splice(0, 5))
            setSelectedLocation(location.title)
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.log(e.message)
            }
        }
    }

    const resetLocation = () => {
        setForecast([]);
        setSelectedLocation('');
    }


    return (
        <Box sx={{ flexGrow: 1, display: 'flex', maxWidth: '100%', justifyContent: 'center', padding: '20px' }}>
            <ThemeProvider theme={theme}>
                {forecast.length > 0 ?
                    <Forecast forecast={forecast} onClick={() => resetLocation()} location={selectedLocation} /> :
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h1" component="div">
                            Select your location
                        </Typography>
                        <Locations locations={locations} setLocation={setLocation} />

                    </Box>
                }
            </ThemeProvider>
        </Box >
    );
}
