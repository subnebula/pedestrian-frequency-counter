import NodeList from './NodeList';
import React from 'react';
import { Provider as _Provider } from 'react-redux';

const Provider = _Provider;

const Home = props => (
    <Provider store={props.store}>
        <div className="container">
            <h1>Node Data</h1>
            <NodeList/>
        </div>
    </Provider>
);

export default Home;