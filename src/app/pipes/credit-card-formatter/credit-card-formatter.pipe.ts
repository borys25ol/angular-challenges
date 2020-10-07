import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!CreditCardFormatterPipe.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Length.'
    }

    if (!CreditCardFormatterPipe.isAllNumbers(cardNumber)) {
      return 'Invalid Characters.'
    }

    return CreditCardFormatterPipe.formatCardNumber(cardNumber)
  }

  private static isAllNumbers(cardNumber: string): boolean {
    return Boolean(+cardNumber)
  }

  private static hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length
    const isMasterVisaCardLength = 16
    const isAmericanExpressCardLength = 15

    return (
      cardNumberLength === isAmericanExpressCardLength ||
      cardNumberLength === isMasterVisaCardLength
    )
  }

  private static formatCardNumber(cardNumber: string): string {
    let regexp = /\d{1,4}/g
    const parts = cardNumber.match(regexp)
    return parts.join('-')
  }
}
