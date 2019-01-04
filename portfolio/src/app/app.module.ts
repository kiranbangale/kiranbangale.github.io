import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { BaseComponent } from "./base/base.component";
import { DashboardComponent } from "./base/dashboard/dashboard.component";
import { PostsComponent } from "./base/posts/posts.component";
import { ProjectsComponent } from "./base/projects/projects.component";
import { FeedbacksComponent } from "./base/feedbacks/feedbacks.component";
import { ContactComponent } from "./footer/contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./header/menu/menu.component";

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
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
