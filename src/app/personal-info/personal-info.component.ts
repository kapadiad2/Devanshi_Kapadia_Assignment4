import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  user: User | null = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();

    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  edit(): void {
    this.router.navigate(['/edit']);
  }
}
