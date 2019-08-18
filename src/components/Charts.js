import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },

        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], 
            opacity: 0.5
          },
        },
        markers: {
          
          size: 3
        },
        xaxis: {
          categories: ['9', '10', '11', '12', '13', '14', '15','16'],
          title: {
            text: 'Time'
          }
        },
        yaxis: {
          title: {
            text: 'counter'
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      series: [
        {
          name: "Walker",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Vehicle",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
    }
  }

  render() {

    return (
      

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="250"width="250" />
        </div>
              );
            }
          }
        

export default Charts;