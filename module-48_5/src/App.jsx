import './App.css'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const defaultProps = {
    center: {
      lat: 23.450001,
      lng: 91.199997
    },
    zoom: 11
  };

  return (
    <>
      <div style={{ height: '500px', width: '1300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  )
}

export default App
