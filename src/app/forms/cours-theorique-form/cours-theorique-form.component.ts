import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'app-cours-theorique-form',
  templateUrl: './cours-theorique-form.component.html',
  styleUrls: ['./cours-theorique-form.component.css']
})
export class CoursTheoriqueFormComponent implements OnInit {

  constructor(private translateService: TranslationService) { }

  ngOnInit(): void {
    this.translateService.applyLanguage();
  }
}
