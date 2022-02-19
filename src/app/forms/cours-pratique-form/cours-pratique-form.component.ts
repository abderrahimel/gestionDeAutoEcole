import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-cours-pratique-form',
  templateUrl: './cours-pratique-form.component.html',
  styleUrls: ['./cours-pratique-form.component.css']
})
export class CoursPratiqueFormComponent implements OnInit {

  constructor(private translateService: TranslationService) { }

  ngOnInit(): void {
    this.translateService.applyLanguage();
  }

}
