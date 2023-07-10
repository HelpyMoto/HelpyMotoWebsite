import React, { useState, useEffect, useRef } from 'react';
import useService from '../hooks/useService';
import servicesData from '../data/Data';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Marker } from 'mapbox-gl';
import * as turf from '@turf/turf';
import NavbarUpdate from '../components/NavbarUpdate';
import ProviderInfo from '../components/ProviderInfo';
import Footer from '../components/Footer';
import LoadingPage from '../components/LoadingPage';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import MapboxDirections from '@mapbox/mapbox-gl-directions';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

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
  const [menu, setMenu] = useState(false);
  const[eta,setEta] = useState('');
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
        'pk.eyJ1IjoiaGVscHltb3RvIiwiYSI6ImNsamNscHVuejAyOXAzZG1vNXppYnM1NzkifQ.BB9fpPJb9eDpRJkWwkRHXA',
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
        

        // Initialize the Mapbox Directions control
    const directions = new MapboxDirections({
      accessToken: 'pk.eyJ1IjoiaGVscHltb3RvIiwiYSI6ImNsamNscHVuejAyOXAzZG1vNXppYnM1NzkifQ.BB9fpPJb9eDpRJkWwkRHXA',
      unit: 'metric',
      profile: 'mapbox/driving',
      controls: { inputs: false }, // Hide the default input controls
      alternatives: false, //Disable route alternatives
      interactive: false, //Disable interactive route selection
    });

    // Add the Directions control to the map
    mapboxMap.addControl(directions, 'top-left');
 
   
    // Get ETA between the two points
    directions.setOrigin(fromCoordinates);
    directions.setDestination(toCoordinates);

     // Event listener for the 'route' event fired when the route is updated
     directions.on('route', (event) => {
      const route = event.route[0];
      if (route) {
        const { duration } = route;
        const estimatedTimeOfArrival = duration / 60; // Convert to minutes
        console.log('ETA:', estimatedTimeOfArrival);
        setEta(estimatedTimeOfArrival.toFixed(2));

      }
    });

          
  

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
        // <div>
        
        // <div className='flex w-full h-screen justify-center items-center text-xl font-semibold relative p-3 m-3'>
        //   <p className='text-center mx-2'>Searching for Providers...</p>
        //   <div className='absolute  animate-ping inline-flex h-[400px] w-[400px]  rounded-full bg-sky-400 opacity-75'></div>
       


        // </div>
        // </div>
        <LoadingPage/>
      ) : (
        <div className='relative'>
          <div
        className={
          menu
            ? 'flex flex-col w-full  backdrop-blur-lg text-black px-4 py-2'
            : 'flex flex-col w-full bg-white backdrop-blur-lg text-black px-4 py-2'
        }
      >
        {/* Logo and Slogan */}
        <div className='flex items-center justify-between bg-transparent '>
          <div className='flex space-x-3 items-center '>
            <img
              src={Logo}
              alt='logo'
              className='w-[80px] h-[50px] object-contain'
            />
            <p className='text-center font-semibold opacity-100'>For Unstoppable Journey</p>

            {/* Rest buttons */}
            <ul className=' w-full text-lg items-center hidden md:flex lg:flex xl:flex space-x-3'>
              <li className='ml-3 nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px]  '>
                <Link
                  className='text-black hover:text-black hover:no-underline text-start font-semibold'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] '>
                <Link
                  className='text-black hover:text-black hover:no-underline text-start font-semibold'
                  to='/'
                >
                  Services
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] '>
                <Link
                  className='text-black hover:text-black hover:no-underline text-start font-semibold'
                  to='/'
                >
                  HM Store
                </Link>
              </li>

              <p className=' after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[100px]  '>
                <Link
                  className='text-black hover:text-black hover:no-underline text-start font-semibold'
                  to='/'
                >
                  About Us
                </Link>
              </p>
            </ul>
          </div>
          <div className='md:hidden lg:hidden xl:hidden  justify-end w-[35px]'>
            <div
              className='w-[35px] h-[25px] flex flex-col justify-between cursor-pointer'
              onClick={() => setMenu(!menu)}
            >
              <div className='h-[3px] bg-black w-full'></div>
              <div className='h-[3px] bg-black w-full'></div>
              <div className='h-[3px] bg-black w-full'></div>
            </div>
            <div
          className={
            menu
              ? ' z-40  duration-1000 ease-in-out transform transition'
              : ' z-40 h-[0px] hidden duration-100000 ease-in-out transform transition'
          }
        >
          <div className='flex w-full pb-1 justify-end'>
            <ul className=' text-lg items-end flex flex-col '>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end '>
                <Link
                  className='text-black hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end'>
                <Link
                  className='text-black hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  Services
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end'>
                <Link
                  className='text-black hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  HM Store
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end'>
                <Link
                  className='text-black hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  About Us
                </Link>
              </li>

             
            </ul>
          </div>
        </div>
          </div>
        </div>
        
        </div>
        
          <div
            ref={mapNode}
            style={{ height: screenSize=='Mobile' ? '60svh' : '100svh', width: '100%' }}
            className=' flex flex-col overflow-hidden  top-0 left-0 relative'
          >
            <ProviderInfo providerData={providerDetails} otp={otp} eta={eta} screen='large'/>
            

          </div>
          <ProviderInfo providerData={providerDetails} otp={otp} screen='small' />
          <Footer/> 
          
        </div>
      )}
    </div>
  );
}

export default Service_Screen;
