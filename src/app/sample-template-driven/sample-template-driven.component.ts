import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-template-driven',
  templateUrl: './sample-template-driven.component.html',
  styleUrls: ['./sample-template-driven.component.css']
})
export class SampleTemplateDrivenComponent implements OnInit {

  fullname: string;
  emailadd: string;
  selectGender:string;
  fullname1: string;
  emailadd1: string;
  selectGender1:string;
  public hide = true;
  public data = false;
  


  constructor( ) { }
  ngOnInit() {
  }
  onSubmit(){
    this.fullname1 = this. fullname;
    this.emailadd1 = this.emailadd;
    this.selectGender1 = this.selectGender;
    this.hide = false;
    this.data = true;
  }
  editClick(){
    this.hide = true;
    this.data= false;
  }

}
