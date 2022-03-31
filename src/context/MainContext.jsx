import React, { useState, useEffect } from 'react';
import { getPlaces } from "../api";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        getPlaces().then(data => setPlaces(data))
    }, [coordinates, bounds])

    return (
        <MainContext.Provider value={{ places, setPlaces, coordinates, setCoordinates, bounds, setBounds }}>
            { children }
        </MainContext.Provider>
    )
}
