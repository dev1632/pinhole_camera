import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  showWarning: boolean = false;
  isGameStarted: boolean =false;

  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  showWarningPopup(){
    
    if (this.userName.trim() === '') {
      alert('Please enter your name to start the game.');
      return;
    }
    else{
      this.showWarning = true;

    }
  }

  startGame() {
    this.showWarning =false;
    this.isGameStarted =true;
    // Check if the user has entered a name
      // Navigate to the first level of the game and pass the username as a query parameter
      this.router.navigate(['/level1'], { queryParams: { username: this.userName }});    
    
  }




  }

