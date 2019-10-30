import React from "react";
import {connect} from "react-redux";
import InfoTableRow from "./InfoTableRow";
import {hideTable} from "../redux/reducers/TableData"
import Charts from "./Charts";
import Calendar from "./Calendar";
import {Button, Collapse} from "react-bootstrap";
import {filterDate} from "../redux/reducers/TableData"
import {loadMarkersByDate} from "../redux/reducers/markers"


class InfoTable extends React.Component {

    constructor(props, context) {
		super(props, context);

		this.state = {
            open: false,
            date: new Date()
        };

        this.dispatchDate = this.dispatchDate.bind(this);
    }

    dispatchDate(date, location){
        this.props.dispatch(filterDate(this.props.id, date, location));
        this.props.dispatch(loadMarkersByDate(date));
      }

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
            this.setState({ 
                open: false,
                date: new Date() })
        }

        const calculateTotal = (data, i) => { // Recursive funtion that goes through all info table rows
            var current = data[i]; // Set the current row to data[i]
            if(i > 0) { // If current isn't the first element of the arry
                return (
                    // Add all the individual values together along with the value of the data[i-1] row
                    current.pedl +
                    current.pedr +
                    current.cycll +
                    current.cyclr + 
                    calculateTotal(data, i - 1) // Recursive function
                );
            } else if (data[i]) { // If data[i] is not undefined/null
                return (
                    // Add only the individual values as there are no more rows to add
                    current.pedl +
                    current.pedr +
                    current.cycll +
                    current.cyclr
                );
            } else return 0; // Returns 0 because data is empty
        }

        const { open, date } = this.state;
        const { data, visible, location } = this.props;

        if (visible) {

            return(
                <div className="absolute bottom right shadow card border-dark z5 w-25">

                    <div className="card-header text-white bg-dark">
                        <h3>{location}</h3> 
                        Today's Total: {calculateTotal(data, data.length - 1)}
                        <button className="close absolute top right mr-3 mt-2" onClick={onClickClose}>
                            <i className="fas fa-times color-white"/>
                        </button> 
                    </div>

                    <div className="card-body px0 pb0">

                        <div> 
                            <Charts 
                                location={location}
                                graph={this.props.graph}
                                data={data}
                            />
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                            <Calendar className="justify-content-center"
                                location={location}
                                dispatchDate={this.dispatchDate}
                                date={date}
                            />
                        
                        </div>
                        <Button className="w-100 justify-content-center"
                            variant="dark"
                            onClick={() => this.setState({ open: !open })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >Show More </Button>
                        
                        <div className="overflow-auto hmax240">
                            <Collapse in={open}  className=" px-0 py-0 collapse">
                                <table id="dataTable" className="table px0 mr-0">
                                    <thead>
                                        <tr>
                                            <th>Time</th>
                                            <th>Pedestrians</th>
                                            <th>Cyclists</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(createInfoTableItem)}
                                    </tbody>
                                </table>
                            </Collapse>
                        </div>
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
        location: state.tableData.location,
        id: state.tableData.id
    }),
  )(InfoTable)

export default InfoTableContainer;
