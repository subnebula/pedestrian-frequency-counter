import React from 'react';

class Node extends React.Component {

    render() {

        return (
            <tr>
                <td>{this.props.node.properties.id}</td>
                <td>{this.props.node.geometry.coordinates}</td>
                <td>{this.props.node.properties.description}</td>
          		<Button variant="primary" onClick={}>Delete</Button>
            </tr>
        );
    }
}

export default Node;
