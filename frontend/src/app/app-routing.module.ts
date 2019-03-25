import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { User } from './models/users';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './CRUD/users/users.module#UsersModule', // Lazy load account module
    canActivate: [AuthGuardService],
    data: { role: 'admin' }
  },
  {
    path: 'internships',
    loadChildren: './CRUD/internships/internships.module#InternshipsModule', // Lazy load account module
    canActivate: [AuthGuardService],
    data: { role: 'estudiante' }
  },
  {
    path: 'welcome',
    loadChildren: './Pages/welcome/welcome.module#WelcomeModule', // Lazy load account module
    canActivate: [AuthGuardService],
    data: { role: 'estudiante' }
  },
  {
    path: 'login',
    loadChildren: './Pages/login/login.module#LoginModule' // Lazy load account module
  },
  // { path: '**', redirectTo: '' }
  { path: '', redirectTo: localStorage.getItem('token') ? 'user' : 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
