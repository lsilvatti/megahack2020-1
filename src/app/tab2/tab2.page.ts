import { Component } from '@angular/core';

import { isEqual, format } from 'date-fns';

interface Transaction {
  title: string;
  description: string;
  type: 'income' | 'outcome';
  value: number;
  date: Date;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  convertNumber = null;
  isExpanded = false;

  transactions = [
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-05-02'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-05-02'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-05-02'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-05-02'), category: 'Crédito' },
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-05-01'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-05-01'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-05-01'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-05-01'), category: 'Crédito' },
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-04-30'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-04-30'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-04-30'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-04-30'), category: 'Crédito' },
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-04-29'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-04-29'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-04-29'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-04-29'), category: 'Crédito' },
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-04-28'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-04-28'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-04-28'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-04-27'), category: 'Crédito' },
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-04-27'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-04-27'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-04-27'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-04-26'), category: 'Crédito' },
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-04-26'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-04-26'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-04-26'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-04-25'), category: 'Crédito' },
    { title: 'A', type: 'income', value: 1500, date: new Date('2020-04-25'), category: 'Crédito' },
    { title: 'B', type: 'outcome', value: 150.50, date: new Date('2020-04-25'), category: 'Alimentação' },
    { title: 'C', type: 'outcome', value: 10.50, date: new Date('2020-04-25'), category: 'Transporte' },
    { title: 'D', type: 'income', value: 1.55, date: new Date('2020-04-25'), category: 'Crédito' },
  ];

  myHeaderFn(record: Transaction, recordIndex: number, records: Transaction[]) {
    if (recordIndex === 0 || !isEqual(records[recordIndex - 1].date, record.date)) {
      return format(record.date, 'dd/MM');
    }
    return null;
  }

  toggleDetails() {
    const grid = document.querySelector('ion-grid');
    const icon = grid.children[grid.children.length - 1]

    if (this.isExpanded) {
      grid.style.height = '250px';
      icon.setAttribute('name', 'chevron-down');

      this.isExpanded = false;
    } else {
      grid.style.height = '80%';
      icon.setAttribute('name', 'chevron-up');

      this.isExpanded = true;
    }
  }

  constructor() {
    this.convertNumber = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
  }

}
