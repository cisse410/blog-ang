import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgxToastNotifyService } from 'ngx-toast-notify';
import { CommentService } from '../../service/comment.service';
import { PostService } from '../../service/post.service';

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent implements OnInit {
  id: number = this.activatedRoute.snapshot.params['id'];
  commentForm!: FormGroup;
  post!: any;
  comments!: any;
  /**
   *
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private toast: NgxToastNotifyService,
    private formBuilder: FormBuilder,
    private commentService: CommentService
  ) {}
  ngOnInit(): void {
    this.getPostById();
    this.commentForm = this.formBuilder.group({
      postedBy: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });
    // this.getCommentByPost();
  }

  getPostById(): void {
    this.postService.getPostById(this.id).subscribe((response) => {
      this.post = response;
      console.log(response);
      this.getCommentByPost();
    });
  }

  likePost(): void {
    this.postService.likePost(this.id).subscribe((response) => {
      this.toast.showToast(
        "Merci d'avoir aimer cet article",
        'light',
        'top-center'
      );
      this.getPostById();
    });
  }

  commentPost() {
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;
    return this.commentService
      .postComment(postedBy, this.id, content)
      .subscribe((response) => {
        console.log(response);
        this.getCommentByPost();
        this.commentForm.reset('');
        this.toast.showToast(
          'Commentaire publié avec succès',
          'primary',
          'top-center'
        );
      });
  }

  getCommentByPost() {
    return this.commentService.getCommentById(this.id).subscribe((response) => {
      this.comments = response;
      console.log('Response   ' + response);
    });
  }
}
