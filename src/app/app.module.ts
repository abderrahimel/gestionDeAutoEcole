import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { HttpClient , HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CandidatComponent } from './components/candidat/candidat.component';
import { CoursTheoriqueComponent } from './cours-theorique/cours-theorique.component';
import { CandidatFormComponent } from './forms/candidat-form/candidat-form.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { CoursTheoriqueFormComponent } from './forms/cours-theorique-form/cours-theorique-form.component';
import { CoursPratiqueComponent } from './cours-pratique/cours-pratique.component';
import { CoursPratiqueFormComponent } from './forms/cours-pratique-form/cours-pratique-form.component';
import { ExamenComponent } from './examen/examen.component';
import { ExamenFormComponent } from './forms/examen-form/examen-form.component';
import { DepenceComponent } from './depence/depence.component';
import { DepenceFormComponent } from './forms/depence-form/depence-form.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoEcoleComponent } from './components/auto-ecole/auto-ecole.component';
import { AutoEcoleFormComponent } from './forms/auto-ecole-form/auto-ecole-form.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { VehiculeFormComponent } from './forms/vehicule-form/vehicule-form.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ButtonsCoursesComponent } from './components/buttons-courses/buttons-courses.component';
import { AuthInterceptor } from './models/auth/auth-interceptor';
import { ProduitComponent } from './produit/produit.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';
import { DossierComponent } from './dossier/dossier.component';
import { DossierFormComponent } from './forms/dossier-form/dossier-form.component';
import { FactureComponent } from './caisse/facture/facture.component';
import { RecetteComponent } from './caisse/recette/recette.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ControlComponent } from './control/control.component';
import { VenteComponent } from './vente/vente.component';
import { CategorieDepenseComponent } from './config/categorie-depense/categorie-depense.component';
import { CategoriePermisComponent } from './config/categorie-permis/categorie-permis.component';
import { LangueComponent } from './config/langue/langue.component';
import { SalaireComponent } from './salaire/salaire.component';
import { AbsenceComponent } from './absence/absence.component';
import { EmployeFormComponent } from './forms/employe-form/employe-form.component';
import { CandidatTrsfComponent } from './transition/candidat-trsf/candidat-trsf.component';
import { CaisseTrsfComponent } from './transition/caisse-trsf/caisse-trsf.component';
import { VehiculeTrsfComponent } from './transition/vehicule-trsf/vehicule-trsf.component';
import { ProduitTrsfComponent } from './transition/produit-trsf/produit-trsf.component';
import { ConfigTrsfComponent } from './transition/config-trsf/config-trsf.component';
import { RecetteformComponent } from './forms/recette/recette.component';
import { AbsenceformComponent } from './forms/absence/absence.component';



export function httpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
};
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SlideBarComponent,
    CandidatComponent,
    CoursTheoriqueComponent,
    CandidatFormComponent,
    CoursTheoriqueFormComponent,
    CoursPratiqueComponent,
    CoursPratiqueFormComponent,
    ExamenComponent,
    ExamenFormComponent,
    DepenceComponent,
    DepenceFormComponent,
    AutoEcoleComponent,
    AutoEcoleFormComponent,
    VehiculeComponent,
    VehiculeFormComponent,
    EmployeeComponent,
    ButtonsCoursesComponent,
    ProduitComponent,
    ProduitFormComponent,
    DossierComponent,
    DossierFormComponent,
    FactureComponent,
    RecetteComponent,
    PaiementComponent,
    FournisseurComponent,
    ControlComponent,
    VenteComponent,
    CategorieDepenseComponent,
    CategoriePermisComponent,
    LangueComponent,
    SalaireComponent,
    AbsenceComponent,
    EmployeFormComponent,
    CandidatTrsfComponent,
    CaisseTrsfComponent,
    VehiculeTrsfComponent,
    ProduitTrsfComponent,
    ConfigTrsfComponent,
    RecetteformComponent,
    AbsenceformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    NgWizardModule.forRoot(ngWizardConfig),
    TranslateModule.forRoot({
      defaultLanguage : 'en-FR',
      loader:{
        provide : TranslateLoader,
        useFactory :httpLoaderFactory,
        deps : [ HttpClient]
      }
    }),
    NgbModule,
   
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  },
  {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  },],
  bootstrap: [AppComponent]
})

export class AppModule { }
