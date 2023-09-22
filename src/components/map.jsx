import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
import useStyles from './style3';

const Map = ({ setCordinates, setBounds, cordinates }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAApZEhRpQ0gyHQEMom8Xdw58KbWuqaUIc' }}
                defaultCenter={cordinates}
                center={cordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={' '}
                onChange={(e) => {
                    setCordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={' '}
            >
            </GoogleMapReact>     </div>);
}
export default Map;