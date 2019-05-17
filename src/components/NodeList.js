import React from 'react'
import { connect } from 'react-redux'

import Node from './Node';
import {hideNodes} from '../redux/reducers/nodes'



class NodeList extends React.Component {
    
    render() {
        const createNodeListItem = (node, i) => {
            return (
                <Node
                    key = {i}
                    node = {node}
                />
            );
        };

        const onClickClose = () => {
            this.props.dispatch(hideNodes());
        } 

        
       if (this.props.visible) { 
           return (
                <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax380 hmax50">
                    <h2>{this.props.location}
                        <button className='btn btn-danger text-right'onClick={onClickClose}>
                            <i className="fas fa-times"/>
                        </button>
                    </h2>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Pedestrians</th>
                                    <th>Cyclists</th>
                                    <th>Temperature</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.nodes.map(createNodeListItem)}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

const NodeListContainer = connect(
    state => ({
        nodes: state.nodes.data,
        visible: state.nodes.visible,
        location: state.nodes.location
    }),
    
)(NodeList);

export default NodeListContainer;