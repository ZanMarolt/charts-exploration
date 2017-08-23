import { Component } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chartist exploration';

  public sampleData: number[] = [5, 9, 7, 8, 5, 3, 5];

  // Create a simple line chart
  public data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      this.sampleData
    ]
  };

  // As options we currently only set a static size of 300x200 px
  public optionsLine = {
    axisX: {
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
    },
    axisY: {
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
    },
    lineSmooth: true,
    width: '500px',
    height: '200px'
  };

  public optionsPie = {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      sliceDonutSolid: 'ct-slice-donut-solid',
      label: 'ct-label'
    },
  };
};
