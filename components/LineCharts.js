import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'smooth',
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
          categories: Array.from(new Array(52), (x, i) => i + 1),
          labels: {
            style: {
              colors: '#000000',
            },
          },
        },

        yaxis: {
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
        colors: ['#07B0F8', '#F84F07'],
      },
      series: [
        {
          name: '2022',
          data: props.trendsDatalast_year,
        },
        {
          name: '2023',
          data: props.trendsDatanow,
        },
      ],
    };
  }

  render() {
    return (
      <div className="line my-12">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={400}
        />
      </div>
    );
  }
}

export default LineCharts;
