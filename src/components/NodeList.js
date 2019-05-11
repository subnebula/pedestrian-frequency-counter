import React from 'react'
import { connect } from 'react-redux'

import Node from './Node';



class NodeList extends React.Component {
    
    render() {
        const createNodeListItem = (node, i) => {
            return (
                <Node
                    id = {i}
                    node = {node}
                />
            );
        };

        
       if (this.props.visible) { 
           return (
                <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax380 hmax50">
                    <h2>Nodes</h2>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
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
        visible: state.nodes.visible
    }),
    
)(NodeList);

export default NodeListContainer;