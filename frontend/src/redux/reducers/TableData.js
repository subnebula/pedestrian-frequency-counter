import axios from 'axios'
const SHOW_TABLE = 'SHOW_TABLE';
const HIDE_TABLE = 'HIDE_TABLE';

const initialState = {
    visible: false,
    location: null,
    data: [
        {   
            location:"View St", 
            data: [
                {"time":"08:20","count":50,"temp":32},
                {"time":"08:30","count":51,"temp":32},
                {"time":"08:40","count":40,"temp":31},
                {"time":"08:50","count":32,"temp":31},
                {"time":"09:00","count":45,"temp":32},
                {"time":"09:10","count":43,"temp":32},
                {"time":"09:20","count":36,"temp":33},
                {"time":"09:30","count":18,"temp":33}
            ]
        },
        {
            location:"Bernard St", 
            data: [
                {"time":"08:20","count":12,"temp":32},
                {"time":"08:30","count":15,"temp":32},
                {"time":"08:40","count":10,"temp":31},
                {"time":"08:50","count":7,"temp":31},
                {"time":"09:00","count":19,"temp":32},
                {"time":"09:10","count":8,"temp":32},
                {"time":"09:20","count":16,"temp":33},
                {"time":"09:30","count":18,"temp":33}
        
        ]
        },
        {   
            location:"Henry St", 
            data: [
                {"time":"08:20","count":57,"temp":32},
                {"time":"08:30","count":58,"temp":32},
                {"time":"08:40","count":43,"temp":31},
                {"time":"08:50","count":34,"temp":31},
                {"time":"09:00","count":42,"temp":32},
                {"time":"09:10","count":44,"temp":32},
                {"time":"09:20","count":32,"temp":33},
                {"time":"09:30","count":11,"temp":33}
            ]
        },
        {
            location:"Forest St", 
            data: [
                {"time":"08:20","count":30,"temp":32},
                {"time":"08:30","count":21,"temp":32},
                {"time":"08:40","count":30,"temp":31},
                {"time":"08:50","count":42,"temp":31},
                {"time":"09:00","count":15,"temp":32},
                {"time":"09:10","count":13,"temp":32},
                {"time":"09:20","count":16,"temp":33},
                {"time":"09:30","count":28,"temp":33}
            ]
        }
    ]
}

function reducer(state = initialState, action) {
    
    switch(action.type) {
        case SHOW_TABLE: {
            
            if (action.data === null) {
                return Object.assign({}, state, {
                    visible: true,
                    location: action.location,
                    data: initialState.data.filter( data => {
                            return data.location === action.location; 
                    })[0].data // Have to get the 0th element of the returned array for some reason 
                })
            } else {
                return Object.assign({}, state, {
                    visible: true,
                    location: action.location,
                    data: action.data
                })
            }
        }
        
        case HIDE_TABLE:
            return Object.assign({}, state, {
                visible: false
            })
        
        default: 
            return state;
    }
    
}

export function showTable(id, location) {

    return (dispatch) => {
        axios.get('/node-sensor-data/' + id)
        .then(response => {

            dispatch({
                type: SHOW_TABLE, 
                location: location, 
                data: response.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: SHOW_TABLE, 
                location: location, 
                data: null
            });
        });
    }
}

export function hideTable() {
    return { type: HIDE_TABLE}
}

export default reducer;