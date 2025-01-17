import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'smooth',
          width: 3.0,
        },
        markers: {
          size: 0,
        },
        grid: {
          borderColor: '#000000',
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          axisBorder: { color: '#000000' },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#000000',
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            style: {
              colors: '#000000',
            },
          },
        },

        yaxis: {
          // logarithmic: true,
          // logBase: 2,
          max: 99.99,
          forceNiceScale: true,
          labels: {
            formatter: (value) => {
              return Number(value).toFixed(2);
            },
            style: {
              colors: '#000000',
            },
          },
        },
        legend: {
          labels: {
            colors: '#000000',
          },
        },
        // chart: {
        //   toolbar: {
        //     show: false,
        //   },
        // },
        colors: ['#db5f57', '#dba157', '#d3db57', '#91db57', '#57db5f', '#57dba1', '#57d3db', '#5791db', '#5f57db', '#a157db', '#db57d3', '#db5791']
      },
      series: props.seriesData,
    };
  }

  render() {
    return (
      <div className="line my-12">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          // height={600}
          className="min-h-screen"
        />
      </div>
    );
  }
}

export default LineCharts;
