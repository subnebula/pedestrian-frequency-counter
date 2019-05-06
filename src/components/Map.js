import React from 'react';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiMTg1MTk5NjEiLCJhIjoiY2p2OWd4bThtMHNwNDN5cDU0OWZ6aTczeiJ9.I0UeX3pGMBHSet68Nx9R4w';

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [144.282600, -36.758900],
      zoom: 11
    });

    const addMarker = () => (
      new mapboxgl.Marker()
        .setLngLat([144.278,-36.759])
        .addTo(this.map)
    )

    this.map.addControl(
      new mapboxgl.NavigationControl()
    );

    addMarker();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div>
        <div className="absolute top right left bottom" ref={el => this.mapContainer = el}/>
      </div>
    );
  }
}

export default Map;