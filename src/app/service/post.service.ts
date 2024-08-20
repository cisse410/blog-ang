import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_API_URL = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(post: any): Observable<any> {
    return this.http.post(BASE_API_URL + '/posts', post);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(BASE_API_URL + '/posts');
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(BASE_API_URL + '/post/' + id);
  }

  likePost(id: number): Observable<any> {
    return this.http.put(BASE_API_URL + '/post/' + id + '/like', {});
  }

  searchPost(title: string) {
    return this.http.get(BASE_API_URL + '/posts/search/' + title);
  }
}
