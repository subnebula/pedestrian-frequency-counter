import React from 'react';
import { connect } from 'react-redux';

import Node from './Node';

class NodeList extends React.Component {
    
    render() {
        const createNodeListItem = (node) => {
            return (
                <Node
                    id = {node.time}
                    node = {node}
                />
            );
        };

        return (
            <div>
                <h2>Nodes</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Pedestrian Right</th>
                                <th>Pedestrian Left</th> 
                                <th>Cyclist Right</th>
                                <th>Cyclist Left</th>
                                <th>Temperature</th>
                                <th>Device ID</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody className='nodeList'>
                            {this.props.nodes.data.map(createNodeListItem)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const NodeListContainer = connect(
    state => ({
        nodes: state.nodes,
    }),
)(NodeList);

export default NodeListContainer;