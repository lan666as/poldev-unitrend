import dynamic from 'next/dynamic';
import React, { Component } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class BarCharts extends Component {
  
  constructor(props) {
    super(props);

    const getPercentHeight = (w, n, x) => {
      const percentWidth = Math.round((x / (w / n)) * 100)
      return `${percentWidth}%`
    }

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: getPercentHeight(props.sector.length * 50, props.sector.length, 25),
          },
        },
        grid: {
          show: false,
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
          categories: props.sector || [],
          labels: {
            style: {
              colors: '#000000',
            },
          },
        },
        yaxis: {
          axisBorder: { color: '#000000' },
          labels: {
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
        fill: {
          colors: props.fillColor,
        },
        theme: {
          palette: 'light', // upto palette10
        },
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: true,
          y: {
            formatter: (value) => {
              return Number(value).toFixed(2);
            },
          },
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          theme: 'dark',
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
      },
      series: [
        {
          name: '%-Change',
          data: props.series || [],
        },
      ],
    };
  }

  render() {
    return (
      <div className="bar">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={100 + this.state.options.xaxis.categories.length * 30}
        />
      </div>
    );
  }
}

export default BarCharts;
