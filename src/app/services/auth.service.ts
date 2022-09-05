import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.checkToken()
  }

  getToken(): any {
    return localStorage.getItem(TOKEN_KEY);
  }

  checkToken(): void {
    const token = this.getToken();
    if (token) this.authState.next(true);
  }

  login(accountInfo: any) {
    const reqOpts = { params: new HttpParams() };
    return this.http.post(`${this.baseUrl}/login`, accountInfo, reqOpts).pipe(
      map((response: any) => {
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem('admin', JSON.stringify(response.user));
        this.authState.next(true);
        return response;
      }));
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('admin');
    this.authState.next(false);
  }

  isAuthenticated() {
    return this.authState.value;
  }

  getUser(): any {
    const userData = localStorage.getItem('admin')
    if (userData) return JSON.parse(userData);
    return null;
  }

  isAdmin(): boolean {
    const user = this.getUser();
    return user?.is_admin == 1;
  }

}
