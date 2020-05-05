import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
  public profileName = "";
  public profileImage = "";
  public profileEmail = "";
  public profileSexo = "";

  constructor() {
    this.profileImage = "assets/imgs/joaosilva.png";
    this.profileName = "João Silva";
    this.profileEmail = "joaosilva@email.com";
    this.profileSexo = "Masculino";
   }
}
