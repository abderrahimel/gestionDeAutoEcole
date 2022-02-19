import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  data:any[]=[];
  message= '';
  constructor(private candidatData: CandidatService,
              private _auth:AuthService){}

  ngOnInit(): void {
    this.getCandidatData();
    this._auth.logged();
    console.log(this._auth.getId());

    
  }
  getCandidatData(){
    this.candidatData.getCandidat(2).subscribe(res =>{
        this.data=res;
    });

    
  }


}