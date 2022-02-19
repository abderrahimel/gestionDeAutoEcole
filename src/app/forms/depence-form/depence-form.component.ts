import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-depence-form',
  templateUrl: './depence-form.component.html',
  styleUrls: ['./depence-form.component.css']
})
export class DepenceFormComponent implements OnInit {

  constructor(private translateService: TranslationService) { }

  ngOnInit(): void {
    this.translateService.applyLanguage();
  }

}
