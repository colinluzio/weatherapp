import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ForeCast from '../forecast';

import { IDay } from '../../interfaces';


describe('Component is rendered correctly', () => {
    const forecast: IDay[] = [{ "weather_state_name": "Heavy Rain", "weather_state_abbr": "hr", "applicable_date": "2022-03-30", "min_temp": 2.55, "max_temp": 11.825 }];
    const location = 'London';

    const reset = jest.fn(() => { });

    it('should render the title correctly', async () => {
        render(
            <ForeCast forecast={forecast} onClick={reset} location={location} />
        );
        const message = screen.getByText('Forecast for London', { exact: true })
        expect(message).toBeInTheDocument();
    });

    it('should call the function correctly', async () => {
        render(
            <ForeCast forecast={forecast} onClick={reset} location={location} />
        );
        fireEvent.click(screen.getByText('Back'));
        expect(reset).toHaveBeenCalled()
    });


});