import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Locations from '../locations';


describe('Component is rendered correctly', () => {
    const locations = [{ "distance": 1836, "title": "Santa Cruz", "location_type": "City", "woeid": 2488853, "latt_long": "36.974018,-122.030952" }, { "distance": 43722, "title": "San Jose", "location_type": "City", "woeid": 2488042, "latt_long": "37.338581,-121.885567" }, { "distance": 49177, "title": "Mountain View", "location_type": "City", "woeid": 2455920, "latt_long": "37.39999,-122.079552" }, { "distance": 96531, "title": "Oakland", "location_type": "City", "woeid": 2463583, "latt_long": "37.80508,-122.273071" }, { "distance": 97420, "title": "San Francisco", "location_type": "City", "woeid": 2487956, "latt_long": "37.777119, -122.41964" }, { "distance": 185820, "title": "Sacramento", "location_type": "City", "woeid": 2486340, "latt_long": "38.579060,-121.491013" }, { "distance": 200162, "title": "Fresno", "location_type": "City", "woeid": 2407517, "latt_long": "36.740681,-119.785728" }, { "distance": 287032, "title": "Lake Tahoe", "location_type": "City", "woeid": 23511744, "latt_long": "39.021400,-120.044823" }, { "distance": 322803, "title": "Bakersfield", "location_type": "City", "woeid": 2358492, "latt_long": "35.351189,-119.024063" }, { "distance": 469934, "title": "Los Angeles", "location_type": "City", "woeid": 2442047, "latt_long": "34.053490,-118.245323" }]

    const setLocation = jest.fn(() => { });

    it('should render the correct number of items', async () => {
        const { container } = render(
            <Locations locations={locations} setLocation={setLocation} />
        );
        expect(container.getElementsByClassName('MuiListItem-root').length).toBe(10);
    });

    it('should call the function correctly', async () => {
        const { container } = render(
            <Locations locations={locations} setLocation={setLocation} />
        );
        fireEvent.click(container.getElementsByClassName('MuiListItem-root')[0]);
        expect(setLocation).toHaveBeenCalled()
    });


});