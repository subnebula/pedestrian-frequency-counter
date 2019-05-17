const SHOW_TABLE = 'SHOW_TABLE';
const HIDE_TABLE = 'HIDE_TABLE';

const initialState = {
    visible: false,
    location: null,
    data: [
        {"Location":"View St", 
            data: [
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32}
            ]
        },
        {"Location":"Bernard St", 
        data: [
            {"Time":"08:20:59","Count":32,"Temp":32},
            {"Time":"08:20:59","Count":32,"Temp":32},
            {"Time":"08:20:59","Count":32,"Temp":32},
            {"Time":"08:20:59","Count":32,"Temp":32},
            {"Time":"08:20:59","Count":32,"Temp":32},
            {"Time":"08:20:59","Count":32,"Temp":32},
            {"Time":"08:20:59","Count":32,"Temp":32},
            {"Time":"08:20:59","Count":32,"Temp":32}
        
        ]
        },
        {"Location":"Henry St", 
            data: [
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32}
            ]
        },
        {"Location":"Forest St", 
            data: [
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32},
                {"Time":"08:20:59","Count":32,"Temp":32}
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
                tableData: initialState.data.filter(location => location === action.location)
            })
        
        case HIDE_TABLE:
            return Object.assign({}, state, {
                visible: false
            })
        
        default: 
            return state;
    }
    
}

export function showTable(location) {
    return { type: SHOW_TABLE, location: location}
}

export function hideTable() {
    return { type: HIDE_TABLE}
}

export default reducer;