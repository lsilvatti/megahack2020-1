import { Component } from '@angular/core';
import tipData from '../../assets/json/tip-cards.json';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public tipsArray = [];

  constructor() {
    this.feedArray();
  }

  feedArray(){
    tipData.forEach(element => {
      this.tipsArray.push(element)
    });
  }  
}

