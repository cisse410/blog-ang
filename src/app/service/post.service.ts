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
}
