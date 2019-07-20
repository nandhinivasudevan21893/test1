import { Component, OnInit } from '@angular/core';
// import { getMaxListeners } from 'cluster';
import { Employee } from '../../models/employee.model';

@Component({
  // selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.scss']
})
export class ListemployeesComponent implements OnInit {
  employees : Employee[] = [
    {
      Id: 1,
      Name: 'Srinath',
      Gender: 'Male',
      Email: 'srinath123@gmail.com',
      Phonenumber: 9034567890,
      Dateofbirth:new Date('01/02/1995'),
      Department: 'ECE',
      IsActive: true,
      Photopath: 'assets/images/srinath.jpg'

    },
    {
      Id: 2,
      Name: 'Sharath',
      Gender: 'Male',
      Email: 'sharath@gmail.com',
      Phonenumber: 8034506789,
      Dateofbirth:new Date('01/02/1996'),
      Department: 'ECE',
      IsActive: true,
      Photopath: 'assets/images/sharath.jpg'

    },
    {
      Id: 3,
      Name: 'mary',
      Gender: 'Female',
      Email: 'sharath@gmail.com',
      Phonenumber: 9934056789,
      Dateofbirth:new Date ('01/02/1993'),
      Department: 'IT',
      IsActive: false,
      Photopath: 'assets/images/mary.jpg'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
