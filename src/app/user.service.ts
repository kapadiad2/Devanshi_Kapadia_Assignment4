import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userKey = 'user';

  constructor() { }

  getUser(): User | null {
    const userJson = sessionStorage.getItem(this.userKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  setUser(user: User): void {
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  updateUser(user: User): void {
    this.setUser(user);
  }
}
