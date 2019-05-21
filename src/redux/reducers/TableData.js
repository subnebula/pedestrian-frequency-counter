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
                {"Time":"08:20","Count":50,"Temp":32},
                {"Time":"08:30","Count":51,"Temp":32},
                {"Time":"08:40","Count":40,"Temp":31},
                {"Time":"08:50","Count":32,"Temp":31},
                {"Time":"09:00","Count":45,"Temp":32},
                {"Time":"09:10","Count":43,"Temp":32},
                {"Time":"09:20","Count":36,"Temp":33},
                {"Time":"09:30","Count":18,"Temp":33}
            ]
        },
        {
            location:"Bernard St", 
            data: [
                {"Time":"08:20","Count":12,"Temp":32},
                {"Time":"08:30","Count":15,"Temp":32},
                {"Time":"08:40","Count":10,"Temp":31},
                {"Time":"08:50","Count":7,"Temp":31},
                {"Time":"09:00","Count":19,"Temp":32},
                {"Time":"09:10","Count":8,"Temp":32},
                {"Time":"09:20","Count":16,"Temp":33},
                {"Time":"09:30","Count":18,"Temp":33}
        
        ]
        },
        {   
            location:"Henry St", 
            data: [
                {"Time":"08:20","Count":57,"Temp":32},
                {"Time":"08:30","Count":58,"Temp":32},
                {"Time":"08:40","Count":43,"Temp":31},
                {"Time":"08:50","Count":34,"Temp":31},
                {"Time":"09:00","Count":42,"Temp":32},
                {"Time":"09:10","Count":44,"Temp":32},
                {"Time":"09:20","Count":32,"Temp":33},
                {"Time":"09:30","Count":11,"Temp":33}
            ]
        },
        {
            location:"Forest St", 
            data: [
                {"Time":"08:20","Count":30,"Temp":32},
                {"Time":"08:30","Count":21,"Temp":32},
                {"Time":"08:40","Count":30,"Temp":31},
                {"Time":"08:50","Count":42,"Temp":31},
                {"Time":"09:00","Count":15,"Temp":32},
                {"Time":"09:10","Count":13,"Temp":32},
                {"Time":"09:20","Count":16,"Temp":33},
                {"Time":"09:30","Count":28,"Temp":33}
            ]
        }
    ]
}

function reducer(state = initialState, action) {
    
    switch(action.type) {
        case SHOW_TABLE: 
            return Object.assign({}, state, {
                visible: true,
                location: action.location,
                data: action.data
                
                    /*initialState.data.filter( data => {
                    return data.location === action.location; 
                    */
                //})[0] // Have to get the 0th element of the returned array for some reason 
            })
        
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
        axios.get('http://localhost:1880/node-sensor-data/' + id)
        .then(response => {

            dispatch({
                type: SHOW_TABLE, 
                location: location, 
                data: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export function hideTable() {
    return { type: HIDE_TABLE}
}

export default reducer;