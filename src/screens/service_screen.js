import React, { useState, useEffect, useRef } from 'react';
import useService from '../hooks/useService';
import servicesData from '../data/Data';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Marker } from 'mapbox-gl';
import * as turf from '@turf/turf';
import NavbarUpdate from '../components/NavbarUpdate';
import ProviderInfo from '../components/ProviderInfo';
import Footer from '../components/Footer';

function Service_Screen() {
  const {
    searching,
    setSearching,
    providerDetails,
    otp,
    otpVerified,
    setOtpVerified,
  } = useService();

  const [screenSize, setScreenSize] = useState('');

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setScreenSize('Mobile');
    } else if (width >= 768 && width < 1024) {
      setScreenSize('Tablet');
    } else {
      setScreenSize('Desktop');
    }
  };

  useEffect(() => {
    handleResize(); // Set initial screen size on component mount

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);

  const [map, setMap] = useState();

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
  const mapNode = useRef(null);

  const centerCoordinates = [73.77293657871756, 18.65896735377518];

  const fromCoordinates = [73.779696389762, 18.667865426543745]; // Replace with your source point coordinates
  const toCoordinates = [73.77090265327057, 18.65176920825535];

  useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === 'undefined' || node === null) return;

    // otherwise, create a map instance
    var mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        'pk.eyJ1Ijoia2lubnlidXpvIiwiYSI6ImNsZ2RzaTQwZDBvY3QzZnA4dXdsd2g3djkifQ.Fjv_5plbOmFi_3-NLr2_jg',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [73.77293657871756, 18.65896735377518],
      zoom: 16,
    });

    mapboxMap && mapboxMap.easeTo({
        padding : {top:0, left:0, right:screenSize == 'Mobile' ? 0 : screenSize == 'Tablet' ? 400 : 500, bottom:0},
        duration: 1000,
    })

    mapboxMap &&
      mapboxMap.on('load', () => {
        new mapboxgl.Marker({
          anchor: 'center',
          scale: 1.2,
          color: '#18f98f',
          draggable: false,
        })
          .setLngLat(fromCoordinates)
          .addTo(mapboxMap);

        new mapboxgl.Marker({
          anchor: 'center',
          scale: 1.2,
          color: '#1c5fcce0',
          draggable: false,
        })
          .setLngLat(toCoordinates)
          .addTo(mapboxMap);

        const midpoint = turf.midpoint(fromCoordinates, toCoordinates);
        const distance = turf.distance(fromCoordinates, toCoordinates, {
          units: 'miles',
        });
        const bearing = turf.bearing(fromCoordinates, toCoordinates);
        const leftSideArc =
          bearing + 90 > 180 ? -180 + (bearing + 90 - 180) : bearing + 90;
        const destination = turf.destination(
          midpoint,
          distance / 7,
          leftSideArc,
          { units: 'miles' }
        );

        const curvedLine = turf.bezierSpline(
          turf.lineString([
            fromCoordinates,
            destination.geometry.coordinates,
            toCoordinates,
          ])
        );

        // Add the line source and layer to the map
        mapboxMap.addSource('route', {
          type: 'geojson',
          data: curvedLine,
        });

        mapboxMap.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#000000',
            'line-width': 3,
          },
        });

        const lineCoordinates = [fromCoordinates, toCoordinates];
        const bounds = lineCoordinates.reduce(
          (bounds, coord) => bounds.extend(coord),
          new mapboxgl.LngLatBounds()
        );
        mapboxMap.fitBounds(bounds, { padding: {top:screenSize=='Mobile'?60:120, bottom:screenSize=='Mobile'?60:120} });

        
      });

    

    // save the map object to React.useState
    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, [searching]);

  return (
    <div>
      {searching ? (
        <div>
        
        <div className='flex w-full h-screen justify-center items-center text-xl font-semibold relative p-3 m-3'>
          <p className='text-center mx-2'>Searching for Providers...</p>
          <div className='absolute  animate-ping inline-flex h-[400px] w-[400px]  rounded-full bg-sky-400 opacity-75'></div>
        </div>
        </div>
      ) : (
        <div className='relative'>
          
          <div
            ref={mapNode}
            style={{ height: screenSize=='Mobile' ? '60svh' : '100svh', width: '100%' }}
            className=' flex flex-col overflow-hidden  top-0 left-0 relative'
          >
            <ProviderInfo providerData={providerDetails} otp={otp} screen='large'/>
            
          </div>
          <ProviderInfo providerData={providerDetails} otp={otp} screen='small' />
          <Footer/> 
          
        </div>
      )}
    </div>
  );
}

export default Service_Screen;
