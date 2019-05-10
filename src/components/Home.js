import React from 'react';
import InfoTable from './InfoTable';
import Map from './Map';
import { Provider } from 'react-redux';
import { store } from '../redux/store'

class Home extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className='map'>
                    <Map/>
                    <InfoTable/>

                    
                    
                </div>
            </Provider>
        );
    }
}

export default Home;