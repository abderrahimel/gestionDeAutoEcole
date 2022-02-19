import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TranslationService } from 'src/app/services/translation.service';
import { MatTableDataSource} from '@angular/material/table';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  data:any[]=[];
  dataSource:any;
  // e=(<HTMLInputElement>document.getElementById("myText")).value;
 // dataSource= new MatTableDataSource(this.data);
  constructor(private translateService:TranslationService, private vehiculedata: DataService, private log: AuthService) { }

  ngOnInit(): void {
    this.translateService.applyLanguage();
    this.getVehiculeData();
  }


  id=this.log.getId();
 
  getVehiculeData(){
    this.vehiculedata.getVehicule().subscribe(res =>{
      for(let i=0; i<=6;i++)
        {this.data[i]=res;
        console.log(res);}
        // this.dataSource=new MatTableDataSource(res);
    });
    
  }
  // applyFilter ()
  // {
  //   this.dataSource.filter= this.e.trim().toLowerCase();
  // }

}
