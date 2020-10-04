import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent implements OnInit {
  @Input() rating = 5
  private highestRating = 5

  constructor() {}

  ngOnInit(): void {}

  get fullStart(): number[] {
    const totalFullStart = Math.floor(this.rating)
    return Array(totalFullStart).fill(0)
  }

  get hasHalfStart(): boolean {
    return (
      this.rating - Math.floor(this.rating) >= 0.5 &&
      this.rating !== this.highestRating
    )
  }

  get emptyStars(): number[] {
    const emptyStars = this.highestRating - Math.ceil(this.rating)
    return Array(emptyStars).fill(0)
  }
}
