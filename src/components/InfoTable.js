import React from 'react';
import {connect} from 'react-redux';
import InfoTableRow from './InfoTableRow';
import {hideTable} from '../redux/reducers/TableData'
import Charts from './Charts';
import Calendar from './Calendar';

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

        if (this.props.visible) { //mr12 ml12 py12 px12 w300 hmax360  z1

            return(
                <div className="absolute bottom right shadow card z5" style={{backgroundColor: "#585e6e"}}>
                    <div className='card-body bg-dark'>
                        <h4 className='card-title text-white'>{this.props.location}</h4>
                        <button className='close absolute top right mr-3 mt-2' onClick={onClickClose}>

                            <i className="fas fa-times color-white"/>
                        </button> 
                    </div>
                    <div>
                        <Calendar/>
                     </div>
                    <div> 
                        <Charts 
                            location={this.props.location}
                            graph={this.props.graph}
                            data={this.props.data}
                        />
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
