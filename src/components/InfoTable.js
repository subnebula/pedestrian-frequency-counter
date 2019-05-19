import React from 'react';
import {connect} from 'react-redux';
import InfoTableRow from './InfoTableRow';

import {hideTable} from '../redux/reducers/tableData'

class InfoTable extends React.Component {

    render(){
        const createInfoTableItem = (row, i) => {
            return(
                <InfoTableRow
                    key = {i}
                    row = {row}
                />
                    
            )
        }

        const onClickClose = () => {
            this.props.dispatch(hideTable());
        }

        if (this.props.visible) {
            return(
                <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax380 hmax50">
                    <div>
                        {this.props.location}
                        <button className='btn btn-danger text-right'onClick={onClickClose}>
                            <i className="fas fa-times"/>
                        </button>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Counter</th>
                                    <th>Temperature</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data.map(createInfoTableItem)}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}




const InfoTableContainer = connect(
    state => ({
        data: state.tableData.data.data,
        visible: state.tableData.visible,
        location: state.tableData.data.location
    }),
  )(InfoTable)

export default InfoTableContainer;