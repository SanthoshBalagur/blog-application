import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogcreateComponent } from './blogcreate/blogcreate.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogcreateComponent,
    BlogeditComponent,
    BlogviewComponent
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot([
     {path:'home',component:HomeComponent},
     {path:'',redirectTo:'home',pathMatch:"full"},
     {path:'about',component:AboutComponent},
     {path:'blog/:blogId',component:BlogviewComponent},

     {path:'blogcreate',component:BlogcreateComponent},
     {path:'edit/:blogId',component:BlogeditComponent}



   ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
