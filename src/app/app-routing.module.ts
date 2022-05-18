import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthorizationComponent } from './authorization/authorization.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  {
		path: '',
		component: AuthorizationComponent,
	},

  {
		path: 'posts',
		// component: PostsComponent,
    children:[
      {
        path: '',
        component: PostsComponent,
        canActivate: [AuthGuardService],
      },

      {
        path: ':postId',
        component: PostDetailsComponent,
        canActivate: [AuthGuardService],
        // canActivateChild:[AuthGuard]
      }
    ]
	},




/*  {
		path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuardService],
    children:[
      {
        path: ':postId',
        component: PostDetailsComponent,
        canActivateChild:[AuthGuard]
      }
    ]
	}, */









];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
