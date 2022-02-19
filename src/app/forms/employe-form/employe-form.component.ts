import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeClass } from 'src/app/classes/employe-class';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent implements OnInit {
  employe = new EmployeClass();
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
