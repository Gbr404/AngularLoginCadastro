import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'Al Simmons';
  password: string = '1234';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'Al Simmons' && this.password === '1234') {
      this.router.navigate(['/produto']);
    } else {
      alert('Invalid credentials');
    }
  }
}
