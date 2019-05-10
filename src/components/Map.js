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

// Creates a new popup object
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  anchor: "top-left"
  });


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

    // Add zoom controls to map
    this.map.addControl(
      new mapboxgl.NavigationControl()
    );

    /* this.props.markers.forEach( (marker) => {
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
    }); */

    // Once the map loads
    this.map.on('load', () => {
      
      // Add a layer of all the sensor nodes to the map
      this.map.addLayer({
        "id": "nodes",
        "type": "circle",
        "source": {
          // Defines that the data is in GEOJSON format
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            // The list of sensors is read from the redux store
            "features":this.props.markers
          }
        },
        "paint": {
          "circle-radius": 6,
          "circle-color": "#a82001"
        }
      });
    });

    // Change the cursor to a pointer when the mouse is over the places layer
    // and add a popup to it
    this.map.on('mouseenter', 'nodes', (point) => {
      this.map.getCanvas().style.cursor = 'pointer';
      
      // Get the coordinates and description
      // of the point under the mouse
      var coordinates = point.features[0].geometry.coordinates.slice();
      var description = point.features[0].properties.description;
 
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(point.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += point.lngLat.lng > coordinates[0] ? 360 : -360;
      }
 
      // Populate the popup and set its coordinates
      // based on the point found.
      popup.setLngLat(coordinates)
        .setHTML(description)
        .addTo(this.map);
    });
   
    // Change it back to a pointer when it leaves and remove popup
    this.map.on('mouseleave', 'nodes', () => {
      this.map.getCanvas().style.cursor = '';
      popup.remove();
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