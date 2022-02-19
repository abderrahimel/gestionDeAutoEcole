import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';
import { AuthService } from 'src/app/services/auth/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  langue = 'en-FR';
  form : FormGroup;

  constructor(private translateService :TranslationService,
              private fb:FormBuilder,
              private http :HttpClient,
              private router: Router,
              private _auth : AuthService){
    this.form = this.fb.group({
      email : '',
      password : ''
    })
  }


  ngOnInit(): void {
    this.translateService.applyLanguage();
  }

  public selectLanguage(lang : any){
    this.langue=lang;
    this.translateService.selectLanguage(lang);
  }

   login(){
    this.http.post('http://127.0.0.1:8000/api/login', this.form.getRawValue()).subscribe( res => {   
      this._auth.setToken(res['access_token']);
      this._auth.setId(res['user_id']);
      this.router.navigate(['/candidat'])
    });
    
  } 

 /*  login(): void {
    const url = `http://127.0.0.1:8000/sanctum/csrf-cookie`;
    this.http.get<any>(url).subscribe((res) => {
      console.log(res);

      // the response is correct but not set the cookies
       this.http.post<any>('http://127.0.0.1:8000/api/login', this.form.getRawValue()).subscribe(success => {
         console.log(success);
      //   this.http.get<any>('http://pruebas.test/api/v1/articles').subscribe(success => console.log(success));
       }
         , error => console.log(error))
    })
  } */
  

}
