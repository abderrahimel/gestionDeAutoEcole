import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-absence-form',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceformComponent implements OnInit {
  form!: FormGroup;
  constructor(private translateService: TranslationService, 
    private dataservice: DataService,
    private fb : FormBuilder) { 
      this.form = this.fb.group({
        employe_id: null,
        justfication: '',
        image:'',
        date_debut:new Date(),
        date_fin:new Date(),
        remarques:'',
      })
    }

  ngOnInit(): void {
    this.translateService.applyLanguage();
  }
  AddAbsence(){
    this.dataservice.insertAbsence(this.form.getRawValue()).subscribe(res => {
     console.log(res);
   }) 
  }

}
