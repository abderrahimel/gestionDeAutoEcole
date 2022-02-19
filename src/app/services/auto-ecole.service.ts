import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoEcoleService {

  constructor(private httpclient: HttpClient) { }
  getAutoEcole(){
    return this.httpclient.get<any[]>('https://api.j2hb.com/api/auto-ecole/2');
  }
  insertAutoEcole(data){
    return this.httpclient.post('https://api.j2hb.com/api/add-auto-ecole',data);
    this.getAutoEcole();
  }
}
