import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss'],
})
export class BannerCutOutComponent {
  @Input() imageUrl: string = 'assets/back-1.jpg'
  @Input() title: string = '100 Angular Challenge'
}
