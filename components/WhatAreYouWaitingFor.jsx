import { useEffect } from 'react'
import { initializeMap } from '../public/js/map'

export default function WhatAreYouWaitingFor() {
    
    useEffect(() => {
        let latitude = '42.8747', longitute = '25.3181';
        initializeMap(latitude, longitute)
    }, [])

    return (
        <div id="map" style={{ height: 600, textAlign: "center", alignContent: 'middle', display: 'flex', margin: 'auto' , width: '100%' }}></div>

      
    )
}