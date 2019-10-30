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
      if(action.error) {
        alert(action.error);
        return state;
      }
      window.location.reload();
      return state;

    case DELETE_NODE:
        if(action.error) {
          alert(action.error);
          return state;
        }
        alert("Deleted Successfully");
        window.location.reload();
        return state;
      
    default:
      return state;
    }    
}

export function loadMarkers() {
  return (dispatch) => {
    axios.get('/api/sensor-nodes')
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

export function loadMarkersByDate(date) {

  // Date is formatted to YYYY-mm-dd, this is what the api expects
  var formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  
  return (dispatch) => {
    axios.get('/api/sensor-nodes/' + formattedDate)
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
    axios.post('/api/sensor-nodes', node)
    .then(response => {
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
    axios.put('/api/sensor-nodes/' + node.devid, node)
    .then(response => {
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
    axios.delete('/api/sensor-nodes/' + nodeID)
    .then(response => {
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