import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './components/candidat/candidat.component';
import { LoginComponent } from './components/login/login.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { CoursPratiqueComponent } from './cours-pratique/cours-pratique.component';
import { CoursTheoriqueComponent } from './cours-theorique/cours-theorique.component';
import { DepenceComponent } from './depence/depence.component';
import { ExamenComponent } from './examen/examen.component';
import { CandidatFormComponent } from './forms/candidat-form/candidat-form.component';
import { CoursPratiqueFormComponent } from './forms/cours-pratique-form/cours-pratique-form.component';
import { CoursTheoriqueFormComponent } from './forms/cours-theorique-form/cours-theorique-form.component';
import { DepenceFormComponent } from './forms/depence-form/depence-form.component';
import { ExamenFormComponent } from './forms/examen-form/examen-form.component';
import { VehiculeFormComponent } from './forms/vehicule-form/vehicule-form.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ButtonsCoursesComponent } from './components/buttons-courses/buttons-courses.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';
import { EmployeFormComponent } from './forms/employe-form/employe-form.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FactureComponent } from './caisse/facture/facture.component';
import { RecetteComponent } from './caisse/recette/recette.component';
import { CaisseTrsfComponent } from './transition/caisse-trsf/caisse-trsf.component';
import { DossierComponent } from './dossier/dossier.component';
import { CandidatTrsfComponent } from './transition/candidat-trsf/candidat-trsf.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { VenteComponent } from './vente/vente.component';
import { ProduitTrsfComponent } from './transition/produit-trsf/produit-trsf.component';
import { ControlComponent } from './control/control.component';
import { CategorieDepenseComponent } from './config/categorie-depense/categorie-depense.component';
import { CategoriePermisComponent } from './config/categorie-permis/categorie-permis.component';
import { ConfigTrsfComponent } from './transition/config-trsf/config-trsf.component';
import { VehiculeTrsfComponent } from './transition/vehicule-trsf/vehicule-trsf.component';
import { RecetteformComponent } from './forms/recette/recette.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'candidat', component: CandidatComponent, pathMatch: 'full' },
  { path: 'slidebar', component: SlideBarComponent, pathMatch: 'full' },
  { path: 'candidat_form', component: CandidatFormComponent, pathMatch: 'full' },
  { path: 'exam', component: ExamenComponent, pathMatch: 'full' },
  { path: 'Theorique_courses', component: CoursTheoriqueComponent, pathMatch: 'full' },
  { path: 'Theorique_form_courses', component: CoursTheoriqueFormComponent, pathMatch: 'full' },
  { path: 'Pratique_courses', component: CoursPratiqueComponent, pathMatch: 'full' },
  { path: 'Pratique_form_courses', component: CoursPratiqueFormComponent, pathMatch: 'full' },
  { path: 'exam_form', component: ExamenFormComponent, pathMatch: 'full' },
  { path: 'depense', component: DepenceComponent, pathMatch: 'full' },
  { path: 'depense_form', component: DepenceFormComponent, pathMatch: 'full' },
  { path: 'vehicule_form', component: VehiculeFormComponent, pathMatch: 'full' },
  { path: 'employe', component: EmployeeComponent, pathMatch: 'full' },
  { path: 'button', component: ButtonsCoursesComponent, pathMatch: 'full' },
  { path: 'vehicule', component: VehiculeComponent, pathMatch: 'full' },
  { path: 'produit_form', component: ProduitFormComponent, pathMatch: 'full' },
  { path: 'produit', component: ProduitComponent, pathMatch: 'full' },
  { path: 'employe_form', component: EmployeFormComponent, pathMatch: 'full' },
  { path: 'paiement', component: PaiementComponent, pathMatch: 'full' },
  { path: 'facture', component: FactureComponent, pathMatch: 'full' },
  { path: 'recette', component: RecetteComponent, pathMatch: 'full' },
  { path: 'recette_form', component: RecetteformComponent, pathMatch: 'full' },
  { path: 'caisse', component: CaisseTrsfComponent, pathMatch: 'full' },
  { path: 'dossier', component: DossierComponent, pathMatch: 'full' },
  { path: 'candidat_trsnf', component: CandidatTrsfComponent, pathMatch: 'full' },
  { path: 'fournissuer', component: FournisseurComponent, pathMatch: 'full' },
  { path: 'vente', component: VenteComponent, pathMatch: 'full' },
  { path: 'produit_trsf', component: ProduitTrsfComponent, pathMatch: 'full' },
  { path: 'control', component: ControlComponent, pathMatch: 'full' },
  { path: 'cat_dep', component: CategorieDepenseComponent, pathMatch: 'full' },
  { path: 'cat_prm', component: CategoriePermisComponent, pathMatch: 'full' },
  { path: 'cat_trnsf', component: ConfigTrsfComponent, pathMatch: 'full' },
  { path: 'vehcl_trnsf', component: VehiculeTrsfComponent, pathMatch: 'full' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
