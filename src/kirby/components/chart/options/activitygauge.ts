import { Options } from 'highcharts';
import { InjectionToken } from '@angular/core';

export const ACTIVITYGAUGE_OPTIONS = new InjectionToken<Options>('ActivityGaugeOptions');
export const ActivityGaugeOptions: Options = {
    chart: {
        type: 'solidgauge',
        height: '110%'
      },
    
      title: {
        text: 'Activity',
        style: {
          fontSize: '24px'
        }
      },
      subtitle: {
        text: '3.456.678',
        style: {
          fontsize: '24px'
        }
      },
      tooltip: {
        enabled: false,
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
          fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
          return {
            x: (this.chart.chartWidth - labelWidth) / 2,
            y: (this.chart.plotHeight / 2) + 15
          };
        }
      },
    
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: 'lightgreen',
          borderWidth: 0
        }]
      },
    
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },
    
      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true
        }
      },
      series: [{
        name: 'Move',
        data: [{
          color: 'darkgreen',
          radius: '112%',
          innerRadius: '88%',
          y: 80
        }]
      }]
};
