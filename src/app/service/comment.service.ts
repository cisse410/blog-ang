import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_API_URL = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  postComment(postedBy: number, postId: number, content: string) {
    const params = {
      postId: postId,
      postedBy: postedBy,
    };
    return this.http.post(BASE_API_URL + '/comment/create', content, {
      params,
    });
  }
}
