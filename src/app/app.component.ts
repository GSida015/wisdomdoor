import { Component } from '@angular/core';
import { ValueSystemService } from './services/value-system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WisdomDoor';
  top = "-350";
  constructor(protected valServ: ValueSystemService){}

  changeHamburgerPosition(){
    this.top = "0"
  }
  changeHamburgerPositionBack(){
    this.top = "-350"
  }
}
