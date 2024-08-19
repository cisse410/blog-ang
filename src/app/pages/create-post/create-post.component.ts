import { NgFor } from '@angular/common';
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
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    NgFor,
    MatIconModule,
    MatDivider,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;
  tags: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      image: [null, [Validators.required]],
      author: [null, [Validators.required]],
    });
  }

  createPost() {
    const data = this.postForm.value;
    data.tags = this.tags;
    this.postService.createPost(data).subscribe(
      (response) => {
        this.snackBar.open('Articlé crée avec succés', 'Fermer');
        this.router.navigateByUrl('');
        console.log(response);
      },
      (error) => {
        this.snackBar.open('Oops! Something went wrong', 'Fermer');
      }
    );
  }

  addTag(event: any) {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
