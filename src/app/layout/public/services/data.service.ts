import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserType } from '../user/user.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(public http: HttpClient) { }


  signUp(data) {
    return this.http.post('api/signup', data);
  }

  uploadFile(data) {
    return this.http.post('api/file', data);
  }
  getFile() {
    return this.http.get('api/files');
  }

  getBooks(): Observable<any> {
    return this.http.get('api/books');
  }

  postBooks(data) {
    return this.http.post('api/book', data);
  }

  editBooks(id, data) {
    return this.http.put('api/book' + id, data);
  }

  deleteBooks(id) {
    return this.http.delete('api/book' + id);
  }

  getUsers(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get('api/user', { headers });
  }

}
