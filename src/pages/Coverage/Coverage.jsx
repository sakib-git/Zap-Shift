import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  // console.log(serviceCenter);
  const mapRef = useRef(null)

  const handleSearch = e => {
    e.preventDefault()
    const location = e.target.location.value;
    const district = serviceCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
    if(district){
      const coord = [district.latitude, district.longitude]
      // console.log(district, coord)
      // go to the location
      mapRef.current.flyTo(coord, 14)
    }
  }
  return (
    <div className="max-w-[1400px] mx-auto mt-10">
      <h2 className="text-3xl font-bold py-5 text-center">We are available in 64 districts</h2>
      {/* search  */}
      <div>
        <form onSubmit={handleSearch} className='py-5 text-center'>
          <label className="input outline-none focus:outline-none focus:ring-0 focus:border-transparent ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='location' className="grow" placeholder="Search"  />



  
</label>
        </form>
      </div>
      <div className="border w-full h-[800px]">
        <MapContainer center={position} zoom={8} scrollWheelZoom={false} className="h-[800px] "
        ref={mapRef}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {serviceCenter.map((center) => (
            <Marker key={center.district} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                service Area : {center.covered_area.join(', ')}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        
      </div>
    </div>
  );
};

export default Coverage;
