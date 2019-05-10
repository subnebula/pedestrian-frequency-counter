import React from 'react';
//import NodeList from './NodeList';
import Map from './Map';
import { Provider } from 'react-redux';
import { store } from '../redux/store'

// Create a react component called "Home"
class Home extends React.Component {

    // Render function is what the component looks like
    render() {

        // Returns JSX (HTML)
        // <Provider store={store}> gives the components inside it access to the react store
        // <Map/> is the Map.js component
        // <NodeList/> is the NodeList.js component
        return (
            <Provider store={store}>
                <div className='map'>
                    <Map/>
                    
                </div>
            </Provider>
        );
    }
}

// Exports the "Home" object for use in other files
export default Home;