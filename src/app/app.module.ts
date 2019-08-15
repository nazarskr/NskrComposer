import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule} from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './loader-config';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule,
        MatButtonModule, MatTabsModule, MatTableModule, MatSortModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { SoftwareComponent } from './pages/software/software.component';
import { FreelancerAppComponent } from './my-apps/freelancer-app/freelancer-app.component';
import { LittleComposerComponent } from './my-apps/little-composer/little-composer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminMusicComponent } from './admin/admin-music/admin-music.component';
import { AdminSoftwareComponent } from './admin/admin-software/admin-software.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { SafePipe } from './shared/pipes/safe.pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AdminGuard } from '../app/admin/login/login.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ContactsComponent,
    HomeComponent,
    MusicComponent,
    SoftwareComponent,
    FreelancerAppComponent,
    LittleComposerComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminAboutComponent,
    AdminMusicComponent,
    AdminSoftwareComponent,
    AdminBlogComponent,
    AdminContactsComponent,
    SafePipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,
    LayoutModule,
    NgxImageGalleryModule,
    NgxYoutubePlayerModule,
    NgxAudioPlayerModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDd1CpztX7MkQLIDzh-zojG6oZ0IpD7xaY',
      authDomain: 'nskrwebsite.firebaseapp.com',
      storageBucket: 'nskrwebsite.appspot.com',
      projectId: 'nskrwebsite',
    }),
    AngularFireStorageModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
