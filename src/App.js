import './App.css';
import React from 'react';
import combinedReducers from './reducers';
import createStore from './helpers/createStore';
import Home from './components/Home';

const initialState = combinedReducers();
const initialStateString =
    JSON.stringify(initialState).replace(/<\//g, "<\\/");
  
const store = createStore(initialState);
const homeComponent = Home({store});

class app extends React.Component{
  
  render() {
    return ( 
      <div>
        <div id="Home">{homeComponent}</div>
        <script>main(${initialStateString});</script>
      </div>
    );
  }
};

export default app;
