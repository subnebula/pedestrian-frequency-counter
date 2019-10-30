import React from 'react';

class InfoTableRow extends React.Component {

    render() {

        const convertTime = (date) => {
            console.log(date)
            var dateJS = new Date(date).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'});
            if (dateJS !== "Invalid Date"){
                return dateJS;
            }
        }

        return (
            <tr className="node">
                <td>{convertTime(this.props.row.date)}</td>
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