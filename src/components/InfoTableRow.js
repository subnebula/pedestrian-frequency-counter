import React from 'react';

class InfoTableRow extends React.Component {

    render() {

        const convertTime = (time) => {
            return new Date(time).toLocaleTimeString();
        }

        return (
            <tr className="node">
                <td>{convertTime(this.props.row.time)}</td>
                <td>
                    {
                        this.props.row.pedl +
                        this.props.row.pedr +
                        this.props.row.cycll +
                        this.props.row.cyclr
                    }
                </td>
                <td>{this.props.row.temp + String.fromCharCode(176)}C</td>
            </tr>
        );
    }
}

export default InfoTableRow;