import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MusicComponent } from './pages/music/music.component';
import { SoftwareComponent } from './pages/software/software.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FreelancerAppComponent } from './my-apps/freelancer-app/freelancer-app.component';
import { LittleComposerComponent } from './my-apps/little-composer/little-composer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from '../app/admin/login/login.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'music', component: MusicComponent  },
  { path: 'software', component: SoftwareComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'freelancerApp', component: FreelancerAppComponent},
  { path: 'littleComposer', component: LittleComposerComponent},
  { path: 'admin', component: AdminComponent}, // , canActivate: [ AdminGuard ]
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
