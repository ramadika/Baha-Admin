// Dependencies
import React, { Component } from 'react'
import ReactApexChart from "react-apexcharts";
// Internals

export default class index extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13],
        options: {
          chart: {
            width: 480,
            type: 'pie',
          },
          labels: ['Men', 'Women', 'Accessories'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={480} />
            </div>
        )
    }
}
