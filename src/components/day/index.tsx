import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IDay } from '../../interfaces';
import { getDay, getDate } from '../../utils';

type DayProps = {
    day: IDay
}

const Day = ({ day }: DayProps) => {

    return (
        <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="div">
                {getDay(day.applicable_date)}      <Typography display="inline">{getDate(day.applicable_date)}</Typography>
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <img src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} style={{ width: '50%' }} alt={day.weather_state_name} />
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                    <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontWeight: 700, lineHeight: 1.2 }}>
                        {Math.round(day.max_temp)}&#176;
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ textAlign: 'center', lineHeight: 1.2 }}>
                        {Math.round(day.min_temp)}&#176;
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default Day;