import React from "react"
import mapboxgl from "mapbox-gl"
import { connect } from "react-redux"

import { filterDate } from "../redux/reducers/TableData"
import { loadMarkers, loadMarkersByDate } from "../redux/reducers/markers"
import { isMobile } from "react-device-detect";

// Public key for mapbox API
mapboxgl.accessToken = "pk.eyJ1IjoiMTg1MTk5NjEiLCJhIjoiY2p2OWd4bThtMHNwNDN5cDU0OWZ6aTczeiJ9.I0UeX3pGMBHSet68Nx9R4w";

var date = new Date();

// Creates a new popup object
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  anchor: "top-left"
});

const gradient = [
  "#8e00e5",
  "#7c0ae0",
  "#6a15db",
  "#581fd6",
  "#472ad2",
  "#3535cd",
  "#233fc8",
  "#114ac3",
  "#0055bf"
]

const key = {
  name: "Pedestrians",
  description: "Number of pedestrians that have passed a point today",
  property: "ped_est",
  stops: [
    [0, gradient[0]],
    [10, gradient[1]],
    [20, gradient[2]],
    [30, gradient[3]],
    [40, gradient[4]],
    [50, gradient[5]],
    [60, gradient[6]],
    [70, gradient[7]],
    ["80+", gradient[8]]
  ]
}




// Defines Map component
class Map extends React.Component {

  // If/when the component mounts
  componentDidMount() {

    this.props.dispatch(loadMarkers());

    //create a new map object, centers it and sets default zoom
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/dark-v10",
      sprite: "mapbox://sprites/mapbox/bright-v9",
      center: [144.279283,-36.757203],
      logoPosition: "top-right",
      zoom: 14,
      hash: true
    });    

    // Add zoom controls to map
    this.map.addControl(
      new mapboxgl.NavigationControl()
    );

    this.map.on("StyleLoad", this.onStyleLoad);

    // Once the map loads
    this.map.on("load", () => {
      
      // Add a heatmap layer to the map
      this.map.addLayer({
        "id": "heatmap",
        "type": "heatmap",
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
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0, "rgba(142, 0, 229,0)",
            0.1, gradient[1],
            0.2, gradient[2],
            0.3, gradient[3],
            0.4, gradient[4],
            0.5, gradient[5],
            0.6, gradient[6],
            0.7, gradient[7],
            0.8, gradient[8]
          ],
          "heatmap-weight": {
            property: "total",
            stops: [
              [1, 0],
              [62, 1]
            ]
          },
          "heatmap-opacity": {
            default: 1,
            stops: [
              [14, 1],
              [15, 0]
            ]
          },
          // increase intensity as zoom level increases
          "heatmap-intensity": {
            stops: [
              [11, 1],
              [15, 3]
            ]
          },
          // increase radius as zoom increases
          "heatmap-radius": {
            stops: [
              [11, 22],
              [15, 28]
            ]
          }
        }
        
      });
      // Add a heatmap layer to the map
      this.map.addLayer({
        "id": "nodes",
        "type": "circle",
        "layout":{
        },
        "source": {
          // Defines that the data is in GEOJSON format
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            // The list of sensors is read from the redux store
            "features": this.props.markers
          }
        },
        "paint": {
          "circle-color": {
            property: "total",
            stops: [
              [0, gradient[0]],
              [10, gradient[1]],
              [20, gradient[2]],
              [30, gradient[3]],
              [40, gradient[4]],
              [50, gradient[5]],
              [60, gradient[6]],
              [70, gradient[7]],
              [80, gradient[8]]
            ]
          },
          "circle-radius": {
            "base": 1.75, //base radius
            "stops": [
              [11, 1], //radius at 11 zoom
              [16, 13]] // radius at 16 zoom
          },
          "circle-opacity": {
            stops: [
              [14, 0], //hide circles at 14 zoom
              [15, 1] //show circles at 15 zoom, fade in and out in between these values
            ]
          }
        }
      });
    });

    // Change the cursor to a pointer when the mouse is over the places layer
    // and add a popup to it
    this.map.on("mouseenter", "nodes", (point) => {
      this.map.getCanvas().style.cursor = "pointer";
      
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
    this.map.on("mouseleave", "nodes", () => {
      this.map.getCanvas().style.cursor = "";
      popup.remove();
    });

    this.map.on("click", "nodes", (point) =>{

      this.map.flyTo({center: point.features[0].geometry.coordinates});
      
      this.props.dispatch(filterDate(
        point.features[0].properties.id,
        date,
        point.features[0].properties.description
      ));
      
    })

  }

  // If/when the component unmounts
  componentWillUnmount() {
    this.map.remove();
  }

  componentWillUpdate(nextProps) {
    const {markers } = nextProps;
    if (this.map.isStyleLoaded()) {
      this.map.getSource('nodes').setData({
        "type": "FeatureCollection",
        // The list of sensors is read from the redux store
        "features": markers
      });
      this.map.getSource('heatmap').setData({
        "type": "FeatureCollection",
        // The list of sensors is read from the redux store
        "features": markers
      });
    }
  }

  render() {

    const renderLegendKeys = (stop, i) => {
      return (
        <div key={i} className="txt-s">
          <span className="mr6 round-full w12 h12 inline-block align-middle " style={{ backgroundColor: stop[1] }} />
          <span className= " text-white">{`${stop[0].toLocaleString()}`}</span>
        </div>
      );
    }

    if (isMobile) {
      return (
        <div className="absolute top right left bottom map" ref={el => this.mapContainer = el}/>
      );
    } else {
      return (
        <div>
          <div className="absolute top right left bottom mt60" ref={el => this.mapContainer = el}/>
          <div className="card absolute bottom left shadow z1 bg-dark">{/*style={{backgroundColor: "#585e6e"}}>*/}
            <div className="card-body">
              <h2 className="card-text txt-s block text-white">{key.name}</h2>
            
            {key.stops.map(renderLegendKeys)}
            </div>
          </div>
        </div>
      );
    }
  }
}

const MapContainer = connect(
  state => ({
    markers: state.markers.data
  })
)(Map);


export default MapContainer;