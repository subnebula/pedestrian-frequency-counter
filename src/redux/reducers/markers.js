import axios from 'axios'
const LOAD_MARKERS = 'LOAD_MARKERS';

const initialState = {
  data: [
    {
      type: 'Feature',
      properties: {
        id: '9000000000010000',
        description: "View St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.278,-36.759]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: '9000000000010001',
        description: "Bernard St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.2723412,-36.7564536]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: '9000000000010002',
        description: "Henry St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.273,-36.758]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: '9000000000010003',
        description: "Forest St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.272,-36.755]
      }
    }
  ]
}

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case LOAD_MARKERS:
      return ( Object.assign({}, state, {
        data: action.data
      }) );

    default:
      return state;
    }    
}

export function loadMarkers() {
  return (dispatch) => {
    axios.get('http://localhost:1880/sensor-nodes')
    .then(response => {
      dispatch({
        type: LOAD_MARKERS,
        data: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
}
