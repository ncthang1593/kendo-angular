import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  API = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(this.API);
  }
}
