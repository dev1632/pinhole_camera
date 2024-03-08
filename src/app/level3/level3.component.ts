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
  
    this.attempts = 0;
 
    this.start();
  }

  ngOnInit(): void {
    // this.canvas = new fabric.Canvas('c', {
    //   width: 800,
    //   height: 400,
    //   backgroundColor: '',
      
    
    // });
    this.canvas.renderAll();
    this.text1 = new fabric.Text('Level 3', {fontSize: 20,selectable:!1,hasControls:!1},);
    this.canvas.add(this.text1);
   
    this.text4 = new fabric.Text('Image screen ', {fontSize: 15,
      left: 110,
      top: 300,selectable:!1,hasControls:!1});
    this.canvas.add(this.text4);
    this.text5 = new fabric.Text('Pinhole screen ', {fontSize: 15,
      left: 325,
      top: 300,selectable:!1,hasControls:!1});
    this.canvas.add(this.text5);
    this.text6 = new fabric.Text('Object screen ', {fontSize: 15,
      left: 550,
      top: 300,selectable:!1,hasControls:!1});
    this.canvas.add(this.text6);

      
    this.obj_line = new fabric.Line(
      [370, 300, 590, 300],
      {
        strokeWidth: 1,
        stroke: 'green',
        fill: "green",
        selectable:!1,hasControls:!1
      });
      this.canvas.add(this.obj_line);

    this.img_line = new fabric.Line(
      [150, 300, 370, 300],
      {
        strokeWidth: 1,
        stroke: 'orange',
        fill: "orange",
        selectable:!1,hasControls:!1
      });
      this.canvas.add(this.img_line);

      

    this.pinhole_screen = new fabric.Polygon(
      [
        {x: 0, y: 150},
        {x: 70, y: 100},
        {x: 70, y: 250},
        {x: 0, y: 300}
      ],
      {
      left: 370,
      stroke: 'black',
      fill: "white",
      selectable:!1,hasControls:!1,
      objectCaching: false,
    });
    this.canvas.add(this.pinhole_screen);

    this.img_screen = new fabric.Polygon(
      [
        {x: 0, y: 150},
        {x: 70, y: 100},
        {x: 70, y: 250},
        {x: 0, y: 300}
      ],{
      left: 150,
      // top: 0,
      
      stroke: 'black',
      fill: "white",
      selectable:!1,hasControls:!1,
      objectCaching: false,
    });
    this.canvas.add(this.img_screen);


    this.row_line1 = new fabric.Line(
      [220, 205, 150, 250],
      {
        strokeWidth: 1,
        stroke: 'black',
        fill: "black",
        selectable:!1,hasControls:!1
      });
      this.canvas.add(this.row_line1);

    this.row_line2 = new fabric.Line(
        [220, 155, 150, 200],
        {
          strokeWidth: 1,
          stroke: 'black',
          fill: "black",
          selectable:!1,hasControls:!1
        });
        this.canvas.add(this.row_line2);

        this.col_line1 = new fabric.Line(
          [175, 285, 175, 135],
          {
            strokeWidth: 1,
            stroke: 'black',
            fill: "black",
            selectable:!1,hasControls:!1
          });
          this.canvas.add(this.col_line1);
    
        this.col_line2 = new fabric.Line(
            [198, 267, 198, 117],
            {
              strokeWidth: 1,
              stroke: 'black',
              fill: "black",
              selectable:!1,hasControls:!1
            });
            this.canvas.add(this.col_line2);
        



    this.obj_screen = new fabric.Polygon(
      [
        {x: 0, y: 150},
        {x: 70, y: 100},
        {x: 70, y: 250},
        {x: 0, y: 300}
      ],{
      left: 590,
      // top: 0,
      
      stroke: 'black',
      fill: "white",
      selectable:!1,hasControls:!1,
      objectCaching: false,
    });
    this.canvas.add(this.obj_screen);

    this.row_line3 = new fabric.Line(
      [660, 205, 590, 250],
      {
        strokeWidth: 1,
        stroke: 'black',
        fill: "black",
        selectable:!1,hasControls:!1
      });
      this.canvas.add(this.row_line3);

    this.row_line4 = new fabric.Line(
        [660, 155, 590, 200],
        {
          strokeWidth: 1,
          stroke: 'black',
          fill: "black",
          selectable:!1,hasControls:!1
        });
        this.canvas.add(this.row_line4);

        this.col_line3 = new fabric.Line(
          [613, 285, 613, 135],
          {
            strokeWidth: 1,
            stroke: 'black',
            fill: "black",
            selectable:!1,hasControls:!1
          });
          this.canvas.add(this.col_line3);
    
        this.col_line4 = new fabric.Line(
            [636, 267, 636, 117],
            {
              strokeWidth: 1,
              stroke: 'black',
              fill: "black",
              selectable:!1,hasControls:!1
            });
            this.canvas.add(this.col_line4);


    this.pinhole=new fabric.Circle({
      radius:6,left:400,top:200,
      stroke:"red",fill:"black",opacity:.9,selectable:!1,strokeWidth:1});
      this.canvas.add(this.pinhole);

      
 

this.route.queryParams.subscribe(params => {
  this.username = params['username'];
});
  }

  Q2(): void{
    this.attempts = 0;

    this.resettimer();
    this.start();
  
    this.ngOnInit();

  }

  Q3(): void{
    this.attempts = 0;
  
    this.resettimer();
    this.start();
    this.ngOnInit();
    

  }

  start(): void{
    if(this.running){
      this.running= true;
      this.starttimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if(this.ms ===100){
          this.sec++;
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

    if(this.Qcount===3){
      this.router.navigate(['/level1/level2/level3'], { queryParams: { username: this.username }});
    }

    if(this.Qcount===2){
      this.Q3();
      this.Qcount++;
    }
    if(this.Qcount===1){
      this.Q2();
      this.Qcount++;
    }
    
    

  }

  updateSlider(event: any){
    
     this.objectBody=this.canvas.getObjects("text");
     for(let pinhole in this.objectBody)"black"!=this.objectBody[pinhole].get("fill")&&this.canvas.remove(this.objectBody[pinhole]);
     this.objectHead=this.canvas.getObjects("line");
     for(let pinhole in this.objectHead)"red"!=this.objectHead[pinhole].get("fill")&&this.canvas.remove(this.objectHead[pinhole]);
     this.pinholeLine=this.canvas.getObjects("circle");
     
     this.drawApperture()
  }

  
  drawApperture() {
    throw new Error('Method not implemented.');
  }
  




}

