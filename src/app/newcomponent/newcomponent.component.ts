import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

  public mamadata : string;

  public pdata : string;
  constructor() { }

  ngOnInit() {
  }
}