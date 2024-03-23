import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})

export class Level2Component implements OnInit{
  title = 'Box-pinhole-game';
  username: string = '';

    ms: any ='0'+ 0;
    sec: any ='0' +0;
    min: any ='0'+ 0;
    starttimer: any;
    running = true;
    attempts: any;
    Qcount: any;
    ans: any;
    
  
    value: any;
    A : any;
    B : any;
    C : any;
    D : any;
    prefix: any;
    imgSlideDistance: number;
    objSlideDistance: number;
    canvas: any;
    img_line: any;
    obj_line: any;
    img_screen: any;
    pinhole_screen: any;
    arrow: any;
    obj_screen: any;
    
    text1: any;
    text2: any;
    text3: any;
    text4: any;
    text5: any;
    text6: any;
    text7: any;
    text8: any;
    text9: any;
    pinhole: any;
    
    objectBody: any;
    objectHead: any;
    pinholeLine: any;
    appertureWidth: number;
    img: any;

    
    // canvas: any;
    constructor(private route: ActivatedRoute, private router: Router) {
      this.imgSlideDistance=220;
      this.objSlideDistance=220;
      this.appertureWidth=.25;
      this.Qcount =1;
      this.attempts = 0;
      this.prefix ="../assets/logo/arrow.png"
      this.start(); //starts timer
    }



    ngOnInit(): void {
      
      

      this.canvas = new fabric.Canvas('c', {
        width: 800,
        height: 400,
        backgroundColor: '#f7f6f2',
      });

      this.canvas.renderAll();
      this.text1 = new fabric.Text('Level 2', {fontSize: 20,selectable:!1,hasControls:!1},);
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


        // this.pinhole = new fabric.Circle({radius: 6,fill:'black',stroke:'black',strokeWidth:3,originX:'center',originY:'center'});
        // this.canvas.add(this.pinhole);
        
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
  
      this.pinhole_screen = new fabric.Polygon(
        [
          {x: 0, y: 150},
          {x: 70, y: 100},
          {x: 70, y: 250},
          {x: 0, y: 300}
        ],{
        left: 370,
        // top: 0,
        
        stroke: 'black',
        fill: "white",
        selectable:!1,hasControls:!1,
        objectCaching: false,
      });
      this.canvas.add(this.pinhole_screen);
  
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
  
  
      this.pinhole=new fabric.Circle({
        radius:6,left:400,top:200,
        stroke:"red",fill:"black",opacity:.9,selectable:!1,strokeWidth:1});
        this.canvas.add(this.pinhole);
  
      this.pinholeLine=new fabric.Line([406,(372-this.appertureWidth)/2+20,406,
      (372+this.appertureWidth)/2+20],{stroke:"white",strokeWidth:4,selectable:!1,evented:!1,fill:"white"});
      this.canvas.add(this.pinholeLine);
      // this.arrow = new fabric.Polygon(
      //   [
      //     {x: 10, y: 0},
      //     {x: 30, y: 0},
      //     {x: 30, y: 50},
      //     {x: 40, y: 50},
      //     {x: 20, y: 65},
      //     {x: 0, y: 50},
      //     {x: 10, y: 50}
          
      //   ],{
      //   left: 605,
      //   top: 180,
      //   fill: "blue",
      //   selectable:!1,hasControls:!1,
      //   // objectCaching: false,
      // });
      // this.canvas.add(this.arrow);
  
      const imageUrl = this.select_image();
  
  fabric.Image.fromURL(imageUrl, (img) => {
    img.set({
      left: 595,
      top: 170,
      selectable:!1,hasControls:!1,
      scaleX: 0.045, 
      scaleY: 0.045
    });
    this.canvas.add(img);
  });

  this.route.queryParams.subscribe(params => {
    this.username = params['username'];
  });












    }

    
    // here on init ends





    //here functions starts
    // onInit is Q1

    select_image(): string{

      this.A = "arrow.png"

      return this.prefix+this.A;


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
      this.attempts++;      
      // this.calculateDistance1();
      // this.calculateDistance2();
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
      console.log("got into slider: ",this.value);
      this.appertureWidth=this.value;
       this.objectBody=this.canvas.getObjects("text");
       for(let pinhole in this.objectBody)"black"!=this.objectBody[pinhole].get("fill")&&this.canvas.remove(this.objectBody[pinhole]);
       this.objectHead=this.canvas.getObjects("line");
       for(let pinhole in this.objectHead)"red"!=this.objectHead[pinhole].get("fill")&&this.canvas.remove(this.objectHead[pinhole]);
       this.pinholeLine=this.canvas.getObjects("circle");
       for(let pinhole in this.pinholeLine)"red"!=this.pinholeLine[pinhole].get("stroke")&&this.canvas.remove(this.pinholeLine[pinhole]);
       this.calculateInvertedTop(),
       this.drawApperture()
    }

    
    drawApperture() {
      throw new Error('Method not implemented.');
    }
    calculateInvertedTop() {
      throw new Error('Method not implemented.');
    }




}
