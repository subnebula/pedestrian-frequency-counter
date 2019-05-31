<<<<<<< HEAD
import React from 'react'
import InfoTable from './InfoTable'
import Map from './Map'
import AddNode from './AddNode'
import { Provider } from 'react-redux'
=======
import React from 'react';
import NodeList from './NodeList';
import Map from './Map';
//import Menu from './Menu';
import NavbarTop from './NavbarTop';
import { Provider } from 'react-redux';
>>>>>>> 8023d565cc5685d2fec70331bc145ffb994e2797
import { store } from '../redux/store'

// Create a react component called "Home"
class Home extends React.Component {

    // Render function is what the component looks like
    render() {
<<<<<<< HEAD
=======

>>>>>>> 8023d565cc5685d2fec70331bc145ffb994e2797
        // Returns JSX (HTML)
        // <Provider store={store}> gives the components inside it access to the redux store
        // <Map/> is the Map.js component
        // <NodeList/> is the NodeList.js component
        return (
            <Provider store={store}>
<<<<<<< HEAD
                <div className='map'>
                    <Map/>
                    <AddNode/>
                    <InfoTable/>
                </div>
=======
               
                <Map/>
                <NodeList/>
                <NavbarTop/>
                
                
               
>>>>>>> 8023d565cc5685d2fec70331bc145ffb994e2797
            </Provider>
        );
    }
}

// Exports the "Home" object for use in other files
export default Home;