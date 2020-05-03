import { Component } from '@angular/core';
import spendData from '../../assets/json/spend-data.json';
import playerData from '../../assets/json/player-data.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public isVisible: boolean = false;
  public buttonArrow = "./assets/icon/arrow-down.svg"
  public spentIcon = "./assets/icon/cash-outline.svg"
  public savedIcon = "./assets/icon/wallet-outline.svg"
  public spent = null;
  public saved = null;
  public desc = "";
  public objective = "Economizar R$ 1500"
  public playerImg = "./assets/imgs/boneco.png"
  public playerRoom = null;
  public arrayObjects = [];

  constructor() {
    this.getSpentValues()
    this.getDescription()
    this.getPlayerRoom()
  }

  expandTopBar() {
    if (this.isVisible){
      this.buttonArrow = "./assets/icon/arrow-down.svg"
    }else {
      this.buttonArrow = "./assets/icon/arrow-up.svg"   
    }

    this.isVisible = !this.isVisible;
  }

  getSpentValues() {
    for(var i=0; i < spendData.length; i++) {
      if (spendData[i].type == "income") {
        this.saved += parseFloat(spendData[i].value);
      } else {
        this.spent += parseFloat(spendData[i].value);
      }
    } 
  }

  getDescription() {
    var temp = this.saved - this.spent;

    if (temp > 0) {
      this.desc = "Sua economia supera seus gastos! Continue assim!";
    } else if (temp < 0) {
      this.desc = "Seus gastos superam sua economia! Vamos lá, você consegue!";
    } else {
      this.desc = "Seus gastos e economia estão iguais! Você está quase lá!"
    }
  }

  getPlayerRoom() {
    this.playerRoom = playerData[0].room
    for(var i = 0; i < playerData[0].objects.length; i++){
      this.arrayObjects.push(playerData[0].objects[i].objectimg);
    }
  }
}
