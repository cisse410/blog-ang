import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../../service/post.service';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    NgFor,
    DatePipe,
    MatChipsModule,
  ],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent implements OnInit {
  id: number = this.activatedRoute.snapshot.params['id'];
  post!: any;
  /**
   *
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    this.getPostId();
  }

  getPostId(): void {
    this.postService.getPostById(this.id).subscribe((response) => {
      this.post = response;
      console.log(response);
    });
  }
}
