import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient,private _router:Router) { }

  //Token pour l'authentification 
  setToken(token){
    localStorage.setItem('auth_token',token);
    return token;
  }

  getAuthToken(){
    let token = localStorage.getItem('auth_token');
    return token;
  }

  static getToken(){
    let token = localStorage.getItem('auth_token');
    return token;
  }

  //stocker l id de l'utilisateur authentifé

  setId(id){
    localStorage.setItem('user_id',id);
  }
  
  //obtenir l'id de l'utilisateur authentifié
  getId(){
    let user_id = localStorage.getItem('user_id');
    return user_id;
  }

  //obtenir l'utilisateur logged in si tu a besoin d'un attribut mets data['nom']

  logged(){
    this.http.get('http://127.0.0.1:8000/api/logged')
      .subscribe(
        data => {console.log(data)},
        err => console.log(err)
      );
  }

  //logout et supprimer le token stoker
  logout(){
    this.http.get('http://127.0.0.1:8000/api/logout').subscribe(
      data =>  {if(data['message']='success'){
        this._router.navigate(['/login']);
        localStorage.clear();
    }},
      err => console.log(err));
  }
}
