import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
