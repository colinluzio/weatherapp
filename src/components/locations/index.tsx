import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import LocationOn from '@mui/icons-material/LocationOn';

import { ILocation } from '../../interfaces';

type LocationsProps = {
    locations: ILocation[];
    setLocation: (location: ILocation) => void;
}

const Locations = ({ locations, setLocation }: LocationsProps) => {

    return (
        <List>
            {locations.map((location: ILocation, index: number) => {
                return (
                    <ListItem onClick={() => setLocation(location)} key={index} sx={{ cursor: 'pointer' }}>
                        <ListItemAvatar>
                            <Avatar>
                                <LocationOn />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={location.title}
                        />
                    </ListItem>
                )
            })}
        </List>
    )
}


export default Locations;