import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChartJS exploration';

  public chart = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 300, 81, 56, 55, 40],
          backgroundColor: 'rgba(255, 0, 0, 0.2)'
        },
        {
          label: 'Second dataset',
          data: [35, 29, 140, 22, 231, 1, 212],
          backgroundColor: 'rgba(0, 255, 0, 0.2)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };
  public chart2 = {
    type: 'pie',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [35, 29, 140, 22, 231, 1, 3],
          backgroundColor: [
            'rgba(0, 255, 0, 0.2)',
            'rgba(100, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 100, 0, 0.2)',
            'rgba(255, 0, 255, 0.2)'

          ]
        },
        {
          label: 'My Second dataset',
          data: [35, 29, 140, 22, 231, 1, 3],
          backgroundColor: 'rgba(0, 0, 255, 0.2)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };
  public chart3 = {
    type: 'doughnut',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [35, 29, 140, 22, 231, 1, 3],
          backgroundColor: [
            'rgba(0, 255, 0, 0.2)',
            'rgba(100, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 100, 0, 0.2)',
            'rgba(255, 0, 255, 0.2)'

          ]
        },
        {
          label: 'My Second dataset',
          data: [35, 29, 140, 22, 231, 1, 3],
          backgroundColor: 'rgba(0, 0, 255, 0.2)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }
}
