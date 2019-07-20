import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.scss']
})
export class CreateemployeeComponent implements OnInit {
  // Gender = 'female';
  // IsActive = true ;
  set:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  saveemployee(empForm:NgForm): void { 
    console.log(empForm.value);
    if(empForm.valid){
      this.set= false;
    }
  }
}
