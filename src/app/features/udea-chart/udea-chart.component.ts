import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  Decimation, DefaultDataPoint,
  DoughnutController,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip
} from "chart.js";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-udea-chart',
  templateUrl: './udea-chart.component.html',
  styleUrls: ['./udea-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UdeaChartComponent implements OnInit {
  showChart = false;

  constructor(private projectService: ProjectService) {
    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Decimation,
      Filler,
      Legend,
      Title,
      Tooltip
    );
  }

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['Completado', 'Por terminar'],
        datasets: [{
          label: '# of Votes',
          data: [0, 0],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    this.projectService.selectedChartChanges$.subscribe(
      (selectedChart) => {
        myChart?.data.datasets.forEach((dataset) => {
          dataset.data= selectedChart as number[]
          this.showChart = selectedChart != [0, 0];
          console.log(dataset.data)
        })
        myChart.update();
      }
    )
  }
}
