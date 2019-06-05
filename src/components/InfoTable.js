import React from 'react';
import {connect} from 'react-redux';
import InfoTableRow from './InfoTableRow';
import {hideTable} from '../redux/reducers/TableData'

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
                <div className="absolute bottom right mr12 ml24 mb36 py12 px12 shadow z1 w360 hmax360 card">
                    <div className='card-body'>
                        <h4 className='card-title'>{this.props.location}</h4>
                        <button className='close absolute top right mr-3 mt-2' onClick={onClickClose}>

                            <i className="fas fa-times"/>
                        </button> 
                    </div>
                    <div className='overflow-auto mr3 ml3 px0 py0 hmax300'>
                        <table className='table'>
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
        data: state.tableData.data,
        visible: state.tableData.visible,
        location: state.tableData.location
    }),
  )(InfoTable)

export default InfoTableContainer;
