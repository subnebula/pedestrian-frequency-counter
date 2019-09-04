import React from 'react';
import Button from "react-bootstrap/Button"

class Node extends React.Component {

    render() {

        return (
            <tr>
                <td>{this.props.node.properties.id}</td>
                <td>{this.props.node.geometry.coordinates}</td>
                <td>{this.props.node.properties.description}</td>
          		<td>
                    <Button variant="primary" >
                        <i className="fas fa-edit"></i> 
                    </Button>
                    <Button variant="danger" >
                        <i className="fas fa-times"></i>
                    </Button>
                </td>
            </tr>
        );
    }
}

export default Node;
