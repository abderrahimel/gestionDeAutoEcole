import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  data:any[]=[];
  constructor(private employeData: DataService){}

  ngOnInit(): void {
    this.getEmployeData();
  }
  getEmployeData(){
    this.employeData.getEmploye().subscribe(res =>{
        this.data=res;
    });
  }

}
