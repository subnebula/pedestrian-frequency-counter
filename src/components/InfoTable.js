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

            <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax380 hmax50">
            <h2>{this.props.location}
            <button className='btn btn-danger absolute top right'onClick={onClickClose}>
                            <i className="fas fa-times"/>
                        </button>
                        </h2>
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
                            {this.props.tableData.map(createInfoTableItem)}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
        } else {return null;
        }
    }
}




const InfoTableContainer = connect(
    state => ({
        tableData: state.tableData.data,
        visible: state.tableData.visible,
        location: state.tableData.location
     
    }),
  )(InfoTable)

export default InfoTableContainer;
