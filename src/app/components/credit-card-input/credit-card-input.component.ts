import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent {
  @Input() creditCardNumber: string

  private readonly = false

  get isReadOnly(): boolean {
    return this.readonly
  }

  @Input() set isReadOnly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadOnlyCCNum(this.creditCardNumber)
      : this.creditCardNumber
    this.readonly = value
  }

  private formatReadOnlyCCNum(cardNumber: string): string {
    let regexp = /\d{1,4}/g
    const parts = cardNumber.match(regexp)
    const onlyLast4Shows = parts.map((value, index) => {
      if (index === parts.length - 1) {
        return value
      }
      return 'xxxx'
    })
    return onlyLast4Shows.join('-')
  }
}
