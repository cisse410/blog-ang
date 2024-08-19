import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { PostService } from '../../service/post.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgFor,
    MatCardModule,
    DatePipe,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  posts!: any[];
  /**
   *
   */
  constructor(private router: Router, private postService: PostService) {}
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((response) => {
      this.posts = response;
      console.log(response);
    });
  }
}
