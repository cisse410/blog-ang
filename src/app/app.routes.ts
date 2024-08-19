import { Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: 'posts', component: PostComponent },
];
