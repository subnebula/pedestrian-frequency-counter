import React from "react"
import DatePicker from 'react-date-picker';
import "./Calendar.css"
 
class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
    };
  }
 
  onChange = date => this.setState({ date });

  dispatchDate = () => {
    this.props.dispatchDate(
    this.state.date,
    this.props.location) // Get rid of location for final build
  }
 
  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          onCalendarClose={this.dispatchDate}
          value={this.state.date}
          locale="en-AU"
        />
      </div>
    );
  }
}
export default Calendar;