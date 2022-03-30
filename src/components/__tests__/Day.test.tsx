import React from 'react';
import { render, screen } from '@testing-library/react';
import Day from '../day';

import { IDay } from '../../interfaces';


describe('Component is rendered correctly', () => {
    const day: IDay = { "weather_state_name": "Heavy Rain", "weather_state_abbr": "hr", "applicable_date": "2022-03-30", "min_temp": 2.55, "max_temp": 11.825 };

    it('should render the day correctly', async () => {
        render(
            <Day day={day} />
        );
        const message = screen.getByText('Wed', { exact: true })
        expect(message).toBeInTheDocument();
    });

    it('should render the max temp correctly', async () => {
        render(
            <Day day={day} />
        );
        const message = screen.getByText('12°', { exact: true })
        expect(message).toBeInTheDocument();
    });

    it('should render the min temp correctly', async () => {
        render(
            <Day day={day} />
        );
        const message = screen.getByText('3°', { exact: true })
        expect(message).toBeInTheDocument();
    });

});