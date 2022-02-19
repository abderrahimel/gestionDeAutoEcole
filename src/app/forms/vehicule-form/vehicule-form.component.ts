import { Component, OnInit } from '@angular/core';
import { Vehicules } from 'src/app/classes/vehicules';
import { DataService } from 'src/app/services/data.service';
import { TranslationService } from 'src/app/services/translation.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrls: ['./vehicule-form.component.css']
})
export class VehiculeFormComponent implements OnInit {
 vhcl = new Vehicules();
 form : FormGroup;
  constructor(private translateService: TranslationService, 
              private dataservice: DataService,
              private fb : FormBuilder) {
    this.form = this.fb.group({
      matricule : '', 
      marque : '',
      date_visite : new Date(),
      type : '',
      modele : new Date(),
      date_vidange : new Date(),
      vignette : '',
      carte_grise : '',
      assurance : '',
      visite : '',
    })

  }

  ngOnInit(): void {
    this.translateService.applyLanguage();
    
  }
  AddVehicule(){
     this.dataservice.insertVehicule(this.form.getRawValue()).subscribe(res => {
      console.log(res);
    }) 
   // console.log(this.form.getRawValue());
}
}