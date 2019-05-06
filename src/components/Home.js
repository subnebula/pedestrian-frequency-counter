import React from 'react';
import NodeList from './NodeList';
import Map from './Map';
import { Provider } from 'react-redux';
import { store } from '../redux/store'

class Home extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className='map'>
                    <Map/>
                    <NodeList/>
                </div>
            </Provider>
        );
    }
}

export default Home;