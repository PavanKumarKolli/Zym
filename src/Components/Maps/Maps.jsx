import React from 'react';
import './Maps.css';


const MapStyle = {
  width: "100%",
  height: "600px"
};

 export const Maps = () => {
  return (
    <div className='Maps-main-container'>
      <p style={{color:"#f36100"}}>Our Office</p>
      <h1 >LOCATION</h1>
     <div className="Maps-maps-location">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7-1-621/259,%206th%20Floor,%20Sahithi%20Arcade,%20Beside%20S.R.Nagar%20Traffic%20Police%20Station,%20Hyderabad-%20500038+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width={MapStyle.width}
            height={MapStyle.height}
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Bee fit"
          />
        </div>
    </div>
  );
};


