import React from 'react';

class Node extends React.Component {

    render() {
        return (
            <tr className="node">
                <td>{this.props.node.pedl}</td>
                <td>{this.props.node.pedr}</td>
                <td>{this.props.node.cycll}</td>
                <td>{this.props.node.cyclr}</td>
                <td>{this.props.node.temp}</td>
                <td>{this.props.node.devid}</td>
                <td>{this.props.node.time}</td>
            </tr>
        );
    }
}

export default Node;