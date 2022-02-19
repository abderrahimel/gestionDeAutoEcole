import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private httpclient: HttpClient) { }
  getCandidat(id){
    return this.httpclient.get<any[]>('https://api.j2hb.com/api/auto-ecole/'+id+'/candidat');
  }
  insertCandidat(data, id){
    return this.httpclient.post('https://api.j2hb.com/api/add-candidat/'+id,data);
    this.getCandidat(id);
  }
}
