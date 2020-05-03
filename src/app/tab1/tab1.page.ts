import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  public obtainedObjects = [];

  constructor(public alertController: AlertController) {
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
    for(var i=0; i < spendData[0].spending.length; i++) {
      if (spendData[0].spending[i].type == "income") {
        this.saved += parseFloat(spendData[0].spending[i].value);
      } else {
        this.spent += parseFloat(spendData[0].spending[i].value);
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
    this.playerRoom = playerData[0].room;
    for(var i = 0; i < playerData[0].objects.length; i++){
      var temp = playerData[0].objects[i].objectname;

      if (temp == "mesa"){
        this.obtainedObjects[0] = true;
      }else if (temp == "lampada"){
        this.obtainedObjects[1] = true;
      }else if (temp == "quadro"){
        this.obtainedObjects[2] = true;
      }
    }
  }

  async registerTransation() {
    const alert = await this.alertController.create({
      header: 'Registrar Transação',
      inputs: [
        {
          name: 'transName',
          type: 'text',
          placeholder: 'Nome da Transação'
        },
        {
          name: 'transValue',
          type: 'number',
          min: 0,
          placeholder: 'Valor da Transação'
        }],
      buttons: [
        {
          text: 'Ganho',
          role: 'submit',
          cssClass: 'success',
          handler: (data) => {
            this.submitTransaction(data.transName, data.transValue, "income");
          }
        },
        {
          text: 'Gasto',
          role: 'submit',
          cssClass: 'danger',
          handler: (data) => {
            console.log(data); 
            this.submitTransaction(data.transName, data.transValue, "outcome");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'medium',
          handler: () => {
            console.log();
          }
        }]
    });
    await alert.present();
  }

  submitTransaction(name, value, type){
    if(value <= 0 ){
      return;
    }
    spendData[0].spending.push({"title": name, "type": type, "value": value})

    if (type == "income"){
      this.saved += parseFloat(value);
      if((this.saved >= 1500)&&(!this.obtainedObjects[2])){
        this.obtainedObjects[2] = true;
      }
      if((this.saved >= 800)&&(!this.obtainedObjects[1])){
        this.obtainedObjects[1] = true;
      }
    }else if (type == "outcome"){
      this.spent += parseFloat(value);
    }

    this.getDescription()
  }
}
