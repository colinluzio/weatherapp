import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

import Day from '../day';
import { IDay } from '../../interfaces';


type ForeCastProps = {
    forecast: IDay[];
    location: string;
    onClick: () => void;

}

const Forecast = ({ forecast, location, onClick }: ForeCastProps) => {

    return (
        <Box>
            <Typography variant="h2" component="div">
                Forecast for {location}
            </Typography>
            <Box sx={{ marginTop: '40px', width: { xs: '100%', md: '800px' }, display: 'flex', flexDirection: 'row' }}>
                {
                    forecast.map((day, index) => {
                        return <Day key={index} day={day} />
                    })
                }
            </Box>
            <Button variant="contained" sx={{ marginTop: '60px', minWidth: '150px', borderRadius: '50px', fontWeight: 'bold' }} startIcon={<ArrowBackIcon />} onClick={onClick}>Back</Button>
        </Box>
    )
}


export default Forecast;