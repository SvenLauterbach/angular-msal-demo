import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { MsalModule, MsalGuard, MsalInterceptor } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate : [MsalGuard] },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }  
];


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
     MsalModule.forRoot({
                    clientID: "5b0169f7-4491-4218-a671-5610bbcaabc1",
                    authority: "https://login.microsoftonline.com/common/",
                    validateAuthority: true,
                    redirectUri: "http://localhost:4200/",
                    cacheLocation : "localStorage",
                    postLogoutRedirectUri: "http://localhost:4200/",
                    navigateToLoginRequestUrl: true,
                    popUp: false,
                    unprotectedResources: ["https://www.microsoft.com/en-us/"],
                })
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
