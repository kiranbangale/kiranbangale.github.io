import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BaseComponent } from './base/base.component';
import { MenuComponent } from './header/menu/menu.component';
import { DashboardComponent } from './base/dashboard/dashboard.component';
import { ProjectsComponent } from './base/projects/projects.component';
import { PostsComponent } from './base/posts/posts.component';
import { FeedbacksComponent } from './base/feedbacks/feedbacks.component';
import { ContactComponent } from './footer/contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from './shared/data.service';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'profile',
    component: BaseComponent
  },
  {
    path: 'myProjects',
    component: ProjectsComponent
  },
  {
    path: 'giveMeFeedback',
    component: FeedbacksComponent
  },
  {
    path: 'contactMe',
    component: ContactComponent
  },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    BaseComponent,
    DashboardComponent,
    PostsComponent,
    ProjectsComponent,
    FeedbacksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
