import axios from 'axios'
const LOAD_MARKERS = 'LOAD_MARKERS';
const ADD_NODE = "ADD_NODE"
const EDIT_NODE = "EDIT_NODE"
const DELETE_NODE = "DELETE_NODE"

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
    
    case ADD_NODE:
      if(action.error) {
        alert(action.error); //make this somehing more meaningful
        return state;
      }
      window.location.reload();
      return state;

    case EDIT_NODE:
      loadMarkers();
      break;
    default:
      return state;
    }    
}

export function loadMarkers() {
  return (dispatch) => {
    axios.get('/sensor-nodes')
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

export function addNode(node) {
  return (dispatch) => {
    axios.post('/sensor-nodes', node)
    .then(response => {
      console.log(response);
      dispatch({type: ADD_NODE, node: node});
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ADD_NODE,
        error: error
      })
    });
  }
}

export function editNode(node) {
  return (dispatch) => {
    axios.put('/sensor-nodes/' + node.devid, node)
    .then(response => {
      console.log(response);
      dispatch({type: EDIT_NODE, node: node});
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: EDIT_NODE,
        error: error
      })
    });
  }
}

export function deleteNode(nodeID) {
  return (dispatch) => {
    axios.delete('/sensor-nodes/' + nodeID)
    .then(response => {
      console.log(response);
      dispatch({type: DELETE_NODE, node: nodeID});
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: DELETE_NODE,
        error: error
      })
    });
  }
}
