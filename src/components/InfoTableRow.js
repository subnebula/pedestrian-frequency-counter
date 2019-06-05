import React from 'react';

class InfoTableRow extends React.Component {

    render() {

        const convertTime = (time) => {
            var date = new Date(time).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'});
            if (date !== "Invalid Date"){
                return date;
            }
        }

        return (
            <tr className="node">
                <td>{convertTime(this.props.row.time) || this.props.row.time}</td>
                <td>
                    {
                        this.props.row.pedl +
                        this.props.row.pedr +
                        this.props.row.cycll +
                        this.props.row.cyclr ||
                        this.props.row.count
                    }
                </td>
                <td>{this.props.row.temp + String.fromCharCode(176)}C</td>
            </tr>
        );
    }
}

export default InfoTableRow;