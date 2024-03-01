import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component {
  username: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {   
  }

  next(){ 
      this.router.navigate(['/level1/level2/level3'], { queryParams: { username: this.username }});
  }

}
