import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'edit', component: EditComponent },
  { path: '', redirectTo: '/personal-info', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
