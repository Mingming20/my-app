import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-sample-reactive',
  templateUrl: './sample-reactive.component.html',
  styleUrls: ['./sample-reactive.component.css']
})
export class SampleReactiveComponent implements OnInit {
    data : string;
    public info = false;
  reactiveForm =this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    emailAdd:['',Validators.required],
    streetAdd:['',Validators.required],
    cityAdd:['',Validators.required],
    stateAdd:['',Validators.required],
    zipAdd:['',Validators.required],
  });
  

  constructor(private fb:FormBuilder) { 

  }

  ngOnInit() {
  }
  onSubmit(){
    this.data = JSON.stringify(this.reactiveForm.value);
    this.info = true;
    
    
  }

}
