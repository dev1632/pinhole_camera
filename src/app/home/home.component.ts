import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string = '';

  constructor(private router: Router) {}

  startGame() {
    // Check if the user has entered a name
    if (this.userName.trim() === '') {
      alert('Please enter your name to start the game.');
      return;
    }

    // Navigate to the first level of the game and pass the username as a query parameter
    this.router.navigate(['/level1'], { queryParams: { username: this.userName }});
  }
  }

