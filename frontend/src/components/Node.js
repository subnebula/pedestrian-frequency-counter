import React from 'react';
import Button from "react-bootstrap/Button"

class Node extends React.Component {

    render() {

        const editNode = () => {
            this.props.handleEdit(this.props.node);
        }

        const deleteNode = () => {
            this.props.handleDelete(this.props.node);
        }

        return (
            <tr>
                <td>{this.props.node.properties.id}</td>
                <td>{this.props.node.geometry.coordinates[1]},
                    {this.props.node.geometry.coordinates[0]}</td>
                <td>{this.props.node.properties.description}</td>
          		<td>
                    <Button variant="primary" onClick={editNode}>
                        <i className="fas fa-edit"></i> 
                    </Button>
                    <Button variant="danger" onClick={deleteNode}>
                        <i className="fas fa-times"></i>
                    </Button>
                </td>
            </tr>
        );
    }
}

export default Node;
