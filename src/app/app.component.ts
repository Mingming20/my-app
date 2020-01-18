import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive = true;
  public pdata : string;
  public cdata : string;

  constructor(){

  }
  ngOnInit(){
  }

  clickSend(){
    
  }
}
