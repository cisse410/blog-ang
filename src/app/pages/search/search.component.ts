import { Component } from '@angular/core';
import {
  FormsModule,
  NgControl,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PostService } from '../../service/post.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NgIf,
    NgFor,
    MatCardModule,
    MatGridListModule,
    RouterModule,
    DatePipe,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchResults: any = [];
  title: string = '';

  constructor(private postService: PostService) {}

  searchPost() {
    this.postService.searchPost(this.title).subscribe((response) => {
      this.searchResults = response;
      console.log(response);
    });
  }
}
