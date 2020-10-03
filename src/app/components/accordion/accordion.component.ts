import { Component, Input, OnInit } from '@angular/core'
import { AccordionItem } from './accordion-item.interface'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() items: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded
  }
}
