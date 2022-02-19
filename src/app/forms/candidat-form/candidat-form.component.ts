import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Candidat } from 'src/app/interfaces/candidat';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { CandidatService } from 'src/app/services/candidat.service';
@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css']
})
export class CandidatFormComponent implements OnInit {
candidat: Candidat | undefined;
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: "{{'souvegarder' | translate}}", class: 'btn btn-primary ajouter', event: () => { alert("Finished!!!"); } }
      ],
    }
  };

  isValidTypeBoolean: boolean = true;

  constructor(private ngWizardService: NgWizardService,private translateService: TranslationService, private candidatservice: CandidatService) { }

  ngOnInit(): void {
    this.translateService.applyLanguage();
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
 
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
 
  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
  AddCandidat(){
    this.candidatservice.insertCandidat(this.candidat, 3).subscribe(res =>{
      console.log(res)
    });
    
      }


}
