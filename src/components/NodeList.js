import React from 'react'
import Node from './Node'

class NodeList extends React.Component {

    render(){

        const createNodeListItem = (node, i) => {
            return(
                <Node
                    key = {i}
                    node = {node}
                />
                    
            )
        }

        return(
            <div className='overflow-auto hmax360'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Device ID</th>
                            <th>Location</th>
                            <th>Street Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.markers.map(createNodeListItem)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NodeList
