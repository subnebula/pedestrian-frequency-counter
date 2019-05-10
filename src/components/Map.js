import React from 'react';
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux';

// Public key for mapbox API
mapboxgl.accessToken = 'pk.eyJ1IjoiMTg1MTk5NjEiLCJhIjoiY2p2OWd4bThtMHNwNDN5cDU0OWZ6aTczeiJ9.I0UeX3pGMBHSet68Nx9R4w';

// Options list for toggle (toggle just for testing)
const options = [{
    name: 'Population',
  }, {
    name: 'GDP',
  }, {
    name: 'Test',
  }
]

function addMarker(lng, lat) {
  return new mapboxgl.Marker()
          .setLngLat([lng,lat]);
}

// Defines Map component
class Map extends React.Component {

  // If/when the component mounts
  componentDidMount() {

    //create a new map object, centers it and sets default zoom
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [144.282600, -36.758900],
      zoom: 14
    });    

    addMarker(144.278,-36.759).addTo(this.map);


    this.map.addControl(
      new mapboxgl.NavigationControl()
    );

    this.props.markers.forEach( (marker) => {
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
    });

  }

  // If/when the component unmounts
  componentWillUnmount() {
    this.map.remove();
  }

  render() {

    const renderOptions = (option, i) => {
      return (
        <label key={i} className="toggle-container">
          <input onChange={() => this.setState({ active: options[i] })} name="toggle" type="radio" />
          <div className="toggle txt-s py3 toggle--active-white">{option.name}</div>
        </label>
      );
    }

    return (
      <div>
        <div className="absolute top right left bottom" ref={el => this.mapContainer = el}/>
        <div className="toggle-group absolute top left ml12 mt12 border border--2 border--white bg-white shadow-darken10 z1">
          {options.map(renderOptions)}
        </div>
      </div>
    );
  }
}

const MapContainer = connect(
  state => ({
      markers: state.data,
  }),
)(Map);


export default MapContainer;