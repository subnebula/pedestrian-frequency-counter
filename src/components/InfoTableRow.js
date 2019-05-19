import React from 'react';

class InfoTableRow extends React.Component {

    render() {
        return (
            <tr className="node">
                <td>{this.props.row.Time}</td>
                <td>{this.props.row.Count}</td>
                <td>{this.props.row.Temp}</td>
            </tr>
        );
    }
}

export default InfoTableRow;