import React from 'react';
import {connect} from 'react-redux';
import InfoTableRow from './InfoTableRow';

class InfoTable extends React.Component {

    render(){
        const createInfoTableItem = (row) => {
            return(
                <InfoTableRow
                    row = {row}

                />
                    
            )
        }

        return(

            <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax380 hmax50">
        <h2>Location</h2>
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
                            {this.props.row.map(createInfoTableItem)}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}




const InfoTableContainer = connect(
    (state, ownProps) => ({
      //visible: selectors.getPopupVisibility(state, ownProps.name),
      row: state.data
    }),
   // actions
  )(InfoTable)

export default InfoTableContainer;