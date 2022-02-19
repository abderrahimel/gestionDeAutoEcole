import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient, private log: AuthService) { }
  id= this.log.getId();
  getVehicule(){
    return this.httpclient.get<any[]>('https://api.j2hb.com/api/vehicule/'+this.id);
  }
  getDepense(){
    return this.httpclient.get<any[]>('https://api.j2hb.com/api/depence/'+this.id);
  }
  getExamen(){
    return this.httpclient.get<any[]>('https://api.j2hb.com/api/examen/'+this.id);
  }
  getEmploye(){
    return this.httpclient.get<any[]>('https://api.j2hb.com/api/employe/'+this.id);
  }
  insertCandidat(data){
    return this.httpclient.post('https://api.j2hb.com/api/add-candidat/2',data);
  
  }
  insertVehicule(data){
    return this.httpclient.post('https://api.j2hb.com/api/add-vehicule/'+this.id,data);
  }
  insertAbsence(data){
    return this.httpclient.post('https://api.j2hb.com/api//auto-ecole/'+ this.id+'/absence',data);
  }
}
