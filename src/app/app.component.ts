import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutoEcoleApp';
  
  constructor(private translateService :TranslationService,public router : Router){

  }
  ngOnInit(): void {
    this.translateService.applyLanguage();
  }
  
 
}
