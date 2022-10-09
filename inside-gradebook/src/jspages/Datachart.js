import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export class DataChart extends Component {

    constructor(props) {
        super(props);


        this.state = {
        //This has to have the weight in $$$$ not share amount!
          series: [120, 41, 41, 17, 15],
          options: {
            chart: {
              width: 380,
              type: 'donut',
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true
                  }
                }
              }
            },
            labels: ["Walmart", "Vanguard Total Stock", "Test1", "Test2", "Test3"],
          },
        };
      }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}



export class LineChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [ {
          name: 'Average ACT Score',
          type: 'line',
          data: [24, 31, 29, 29, 31, 31, 24, 31]
        }],
        options: {
          chart: {
            height: 300,
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            text: 'Average ACT Score',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            categories: [2017 ,2018 ,2019, 2020, 2021, 2022, 2023, 2024],
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB',
                }
              },
              title: {
                text: "Grade Scores",
                style: {
                  color: '#008FFB',
                }
              },
              tooltip: {
                enabled: true
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            },
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="line" height={300} />
</div>     
);
        }
      }
