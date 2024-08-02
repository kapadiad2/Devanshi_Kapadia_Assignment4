import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  user1: User;
  constructor(private fb: FormBuilder, private userService: UserService,private router: Router) {
    this.editForm = this.fb.group({
      StreetName: ['', Validators.required],
      PostalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      City: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.editForm.patchValue(user);
  }

  save() {
    if (this.editForm.valid) {
      const updatedUser = this.editForm.value;
      this.user1 = this.userService.getUser();
      console.log('---in edit   ',this.user1);
      sessionStorage.setItem('user', JSON.stringify(updatedUser,));
      
      this.router.navigate(['/personal-info']);
    } else {
      alert('Please correct the errors in the form.');
    }
  }
}
