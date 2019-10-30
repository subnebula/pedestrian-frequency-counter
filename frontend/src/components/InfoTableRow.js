import React from 'react';

class InfoTableRow extends React.Component {

    render() {

        const convertTime = (date) => {
            var dateJS = new Date(date).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'});
            if (dateJS !== "Invalid Date"){
                return dateJS;
            }
        }

        return (
            <tr className="node">
                <td>{convertTime(this.props.row.date)}</td>
                <td>{this.props.row.pedl + this.props.row.pedr}</td>
                <td>{this.props.row.cycll + this.props.row.cyclr}</td>
            </tr>
        );
    }
}

export default InfoTableRow;