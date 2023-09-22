
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutimage from "../images/l.jpg"
import Footer from "../components/Footer";
import Trip from "../components/trip";
import Map from '../components/map';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { Autocomplete } from "@react-google-maps/api";
import useStyles from '../components/style.js';
import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import "../components/home.css"
function Service() {
    const [autocomplete,setautocomplete]=useState(null);
    const classes = useStyles();
    const [places, setPlaces] = useState([]);
    const [cordinates, setCordinates] = useState({});
    const [bounds, setBounds] = useState([]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCordinates({ lat: latitude, lng: longitude });
        })
    }, []);

     const onLoad=(autoC )=>setautocomplete(autoC);
     const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat(); 
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCordinates({lat,lng});
     }

    //  useEffect(() => {
    //     console.log(cordinates, bounds); getPlaceData(bounds.sw, bounds.ne).then((data) => {
    //         console.log(data); setPlaces(data);
    //     })
    // }, [cordinates, bounds]);
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg={aboutimage}
                title="Service"
                btnClass="hide" />
            <div>
                <div>
                    <h2> Explore new Destinations</h2>
                    <p>You can discover unique destinations using Google Maps.</p>
                </div>
                <div className="a">
                    <Box display="flex">
                        <Typography variant="h6" className={classes.title}>            Explore new places
                        </Typography>
                    
                         <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <searchIcon />
                            </div>
                            <InputBase placeholder="Search..."
                                classes={{ root: classes.inputroot, input: classes.inputInput }} />
                        </div>
                         </Autocomplete> 
                    </Box>
                </div>

            </div>
            <div className="c">


                <Grid container spacing={3} style={{ width: '100%' }}>

                    <Grid item xs={12} md={12}>             <Map setCordinates={setCordinates} setBounds={setBounds} cordinates={cordinates} />             </Grid>
                </Grid >
            </div>







            <Trip />
            <Footer />
        </>
    )
}
export default Service;