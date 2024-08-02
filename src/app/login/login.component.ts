import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  login(): void {
    const user: User = {
      FirstName: 'Devanshi',
      LastName: 'Kapadia',
      EmailAddress: 'kapadiad2@mymacewan.ca',
      PhoneNumber: '789-789-3645',
      StreetName: '46 Main St',
      PostalCode: '596874',
      City: 'Edmonton'
    };
    
    this.userService.setUser(user);
    this.router.navigate(['/personal-info']);
  }
}
