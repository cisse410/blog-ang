import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostComponent } from './pages/post/post.component';
import { SearchComponent } from './pages/search/search.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: 'posts', component: PostComponent },
  { path: 'search', component: SearchComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
