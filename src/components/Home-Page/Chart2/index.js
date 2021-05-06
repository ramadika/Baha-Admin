// Dependencies
import React, { Component } from 'react'
import ReactApexChart from "react-apexcharts";
// Internals

export default class index extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            width: 500,
            height: 450,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
        //   title: {
        //     text: 'Product Trends by Month',
        //     align: 'left'
        //   },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      
      
      };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={500} height={450} />
            </div>
        )
    }
}
