const SHOW_NODES = 'SHOW_NODES';
const HIDE_NODES = 'HIDE_NODES';

const initialState = {
    visible: false,
    data: [
        {"pedl":32,"pedr":32,"cycll":32,"cyclr":32,"temp":6.4,"devid":"9000000000010000","time":"2019-04-24T04:00:21.000Z"},
        {"pedl":80,"pedr":80,"cycll":80,"cyclr":80,"temp":16,"devid":"9000000000010000","time":"2019-04-24T04:01:42.000Z"},
        {"pedl":160,"pedr":176,"cycll":192,"cyclr":208,"temp":44.8,"devid":"9000000000010000","time":"2019-04-24T04:08:25.000Z"},
        {"pedl":160,"pedr":176,"cycll":192,"cyclr":208,"temp":44.8,"devid":"9000000000010000","time":"2019-04-24T04:08:50.000Z"},
        {"pedl":160,"pedr":176,"cycll":192,"cyclr":208,"temp":44.8,"devid":"9000000000010000","time":"2019-04-24T04:08:50.000Z"},
        {"pedl":160,"pedr":176,"cycll":192,"cyclr":208,"temp":44.8,"devid":"9000000000010000","time":"2019-04-24T04:08:51.000Z"},
        {"pedl":160,"pedr":176,"cycll":192,"cyclr":208,"temp":44.8,"devid":"9000000000010000","time":"2019-04-24T04:08:52.000Z"},
        {"pedl":160,"pedr":176,"cycll":192,"cyclr":208,"temp":44.8,"devid":"9000000000010000","time":"2019-04-24T04:13:14.000Z"}
    ]
}

function reducer(state = initialState, action) {

    switch(action.type) {
        case SHOW_NODES: 
            return Object.assign({}, state, {
                visible: !state.visible
            })
        
        case HIDE_NODES:
            return Object.assign({}, state, {
                visible: false
            })
        
        default: 
            return state;
    }
    
}

reducer.showNodes = () => {
    return { type: SHOW_NODES}
}

reducer.hideNodes = () => {
    return { type: HIDE_NODES}
}

export default reducer;