import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "count-bar"
        },
        xaxis: {
          categories: [9.00,10.00,11.00,12.00,13.00,14.00,15.00,16.00,17.00]
        }
      },
      series: [
        {
          name: "counts",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
                options={this.state.options}
               series={this.state.series}
               type="line"
               width="300"
             
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;