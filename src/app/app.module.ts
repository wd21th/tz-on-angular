import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire'


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { PostsComponent } from './posts/posts.component';

import { PostDetailsComponent } from './posts/post-details/post-details.component';



import { FirebaseService } from './services/firebase/firebase.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

import { AuthService } from './services/auth-guard/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    PostsComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCLs9ieR5puu5OxLJnTZ9CmWGH4aHIYBu8",
      authDomain: "test-database-firebase.firebaseapp.com",
      projectId: "test-database-firebase",
      storageBucket: "test-database-firebase.appspot.com",
      messagingSenderId: "181335873606",
      appId: "1:181335873606:web:9c1c29f399f6cf074ed247",
      measurementId: "G-JSGVXX629T"
    })
  ],
  providers: [FirebaseService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
