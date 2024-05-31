import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { ActivatedRoute, Router } from '@angular/router';
import { reduce } from 'rxjs';



@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component {title = 'Box-pinhole-game';
username: string = '';

  ms: any ='0'+ 0;
  sec: any ='0' +0;
  min: any ='0'+ 0;
  starttimer: any;
  running = true;
  attempts: any;
  level3Attempts : number =1;
  level3time : number =0;
  timecounter: number;

  level2Attempts: number =0;
    
    level2time: number =0;
    level1part1Attempts: number =0;
    level1part1time:number =0;
    level1Attempts: number=0;
    level1time: number=0;


  // temp: any;
  canvas: any;
  img_line: any;
  obj_line: any;
  img_screen: any;
  pinhole_screen: any;
  obj_screen: any;
  Qcount : any;
  
  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;
  pinhole: any;
  row_line1 : any;
  row_line2 : any;
  row_line3 : any;
  row_line4 : any;
  col_line1 : any;
  col_line2 : any;
  col_line3 : any;
  col_line4 : any;
  
  objectBody: any;
  objectHead: any;
  pinholeLine: any;
  appertureWidth: number;
  img: any;

  
  // canvas: any;
  constructor(private route: ActivatedRoute, private router: Router) {

    this.appertureWidth=.25;
    this.timecounter=0;
  
    this.attempts = 1;
 
    this.start();
  }

  ngOnInit(): void {
    // this.canvas = new fabric.Canvas('c', {
    //   width: 800,
    //   height: 400,
    //   backgroundColor: '',
      
    
    // });
  
      
   

      




  
        


 

this.route.queryParams.subscribe(params => {
  // this.username = params['username'];
  this.level1Attempts = params['level1Attempts'];
      this.level1time = params['level1time'];
      this.level1part1Attempts = params['level1part1Attempts'];
      this.level1part1time = params['level1part1time'];
      this.level2Attempts = params['level2Attempts'];
      this.level2time = params['level2time'];
});




  }

  

  start(): void{
    if(this.running){
      this.running= true;
      this.starttimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if(this.ms ===100){
          this.sec++;
          this.timecounter++;

          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' +0;
        }

        if(this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' +0;
        }
      }, 10);
    }else{
      this.stop();
    }
  }

  stop(): void{
    clearInterval(this.starttimer);
    this.running = false;
  }

  resettimer(): void{
    clearInterval(this.starttimer);
    this.min = this.sec = this.ms = '0' +0;
  }
  
  apply(){
   
    this.canvas.remove(this.text2,this.text3);
  }
  reset(){

  }
  next(){
    this.level3time =this.timecounter;
    this.level3Attempts = this.attempts;

    this.router.navigate(['results'], { queryParams: { username: this.username,
      level1Attempts: this.level1Attempts,
          level1time: this.level1time,
          level1part1Attempts: this.level1part1Attempts,
          level1part1time: this.level1part1time,
          level2Attempts: this.level2Attempts,
          level2time: this.level2time,
          level3Attempts: this.level3Attempts,
          level3time: this.level3time
          
     }});
    
    

  }

  

  




}

