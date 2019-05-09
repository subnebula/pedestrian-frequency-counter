import React from 'react';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiMTg1MTk5NjEiLCJhIjoiY2p2OWd4bThtMHNwNDN5cDU0OWZ6aTczeiJ9.I0UeX3pGMBHSet68Nx9R4w';

const options = [{
  name: 'Population',
  description: 'Estimated total population',
  property: 'pop_est',
  stops: [
    [0, '#f8d5cc'],
    [1000000, '#f4bfb6'],
    [5000000, '#f1a8a5'],
    [10000000, '#ee8f9a'],
    [50000000, '#ec739b'],
    [100000000, '#dd5ca8'],
    [250000000, '#c44cc0'],
    [500000000, '#9f43d7'],
    [1000000000, '#6e40e6']
  ]
}, {
  name: 'GDP',
  description: 'Estimate total GDP in millions of dollars',
  property: 'gdp_md_est',
  stops: [
    [0, '#f8d5cc'],
    [1000, '#f4bfb6'],
    [5000, '#f1a8a5'],
    [10000, '#ee8f9a'],
    [50000, '#ec739b'],
    [100000, '#dd5ca8'],
    [250000, '#c44cc0'],
    [5000000, '#9f43d7'],
    [10000000, '#6e40e6']
  ]
},
{
  name: 'Test',
  description: 'Estimated total population',
  property: 'pop_est',
  stops: [
    [0, '#f8d5cc'],
    [1000000, '#f4bfb6'],
    [5000000, '#f1a8a5'],
    [10000000, '#ee8f9a'],
    [50000000, '#ec739b'],
    [100000000, '#dd5ca8'],
    [250000000, '#c44cc0'],
    [500000000, '#9f43d7'],
    [1000000000, '#6e40e6']
  ]
}]

// Define popup
  var popup = new mapboxgl.Popup({anchor: 'top-left', className: 'my-class'})
  .setHTML("<h1>Hello World!</h1>")
  .setMaxWidth("300px")

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [144.282600, -36.758900],
      zoom: 11
    });

    const addMarker = () => {
        new mapboxgl.Marker()
          .setLngLat([144.278,-36.759])
          //add popup to marker
          .setPopup(popup)
          .addTo(this.map);

        new mapboxgl.Marker()
          .setLngLat([144.2723412,-36.7564536])
          .addTo(this.map)
    }
    

    addMarker();


    this.map.addControl(
      new mapboxgl.NavigationControl()
    );

  }

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


export default Map;