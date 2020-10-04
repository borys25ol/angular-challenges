import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number
  @Input() max: number = 100

  constructor() {}

  ngOnInit(): void {}
}
