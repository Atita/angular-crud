import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Registration {
    constructor(
public firstName: string = '',
public lastName: string = '',
public dob: NgbDateStruct = null,
public email: string = '',
public password: string = '',
public country: string = 'Select country'
) {}
}
