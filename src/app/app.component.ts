import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterial';
  showSpiner = false;
  opened = false;

  loadData() {
    this.showSpiner = true;
    setTimeout(()=>{
      this.showSpiner = false;
    },5000);
  }
  log(state) {
    console.log(state)
  }
}
