import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'Box-pinhole-game';
//   value: any;
//   value1: any;
//   value2: any;
//   imgSlideDistance: number;
//   objSlideDistance: number;
//   canvas: any;
//   img_line: any;
//   obj_line: any;
//   img_screen: any;
//   pinhole_screen: any;
//   arrow: any;
//   obj_screen: any;
  
//   text1: any;
//   text2: any;
//   text3: any;
//   text4: any;
//   text5: any;
//   text6: any;
//   text7: any;
//   text8: any;
//   pinhole: any;
  
//   objectBody: any;
//   objectHead: any;
//   pinholeLine: any;
//   appertureWidth: number;
//   img: any;
  
//   // canvas: any;
//   constructor() {
//     this.imgSlideDistance=220;
//     this.objSlideDistance=220;
//     this.appertureWidth=.25;
//   }
//   ngOnInit(): void {
//     this.canvas = new fabric.Canvas('c', {
//       width: 800,
//       height: 400,
//       backgroundColor: '#f7f6f2',
//     });
//     this.canvas.renderAll();
//     this.text1 = new fabric.Text('Level 1', {fontSize: 20,selectable:!1,hasControls:!1},);
//     this.canvas.add(this.text1);
//     this.text2 = new fabric.Text('Distance 1', {fontSize: 20,
//       left: 220,
//       top: 280,selectable:!1,hasControls:!1});
//     this.canvas.add(this.text2);
//     this.text3 = new fabric.Text('Distance 2', {fontSize: 20,
//       left: 440,
//       top: 280,selectable:!1,hasControls:!1});
//     this.canvas.add(this.text3);
//     this.text4 = new fabric.Text('Image screen ', {fontSize: 15,
//       left: 110,
//       top: 300,selectable:!1,hasControls:!1});
//     this.canvas.add(this.text4);
//     this.text5 = new fabric.Text('Pinhole screen ', {fontSize: 15,
//       left: 325,
//       top: 300,selectable:!1,hasControls:!1});
//     this.canvas.add(this.text5);
//     this.text6 = new fabric.Text('Object screen ', {fontSize: 15,
//       left: 550,
//       top: 300,selectable:!1,hasControls:!1});
//     this.canvas.add(this.text6);
//     this.text7 = new fabric.Text('Height - x cm ', {fontSize: 15,
//       left: 110,
//       top: 320,selectable:!1,hasControls:!1});
//     this.canvas.add(this.text7);
//     this.text8 = new fabric.Text('Height - 5 cm ', {fontSize: 15,
//       left: 550,
//       top: 320,selectable:!1,hasControls:!1});
//       this.canvas.add(this.text8);
//       // this.pinhole = new fabric.Circle({radius: 6,fill:'black',stroke:'black',strokeWidth:3,originX:'center',originY:'center'});
//       // this.canvas.add(this.pinhole);
      
//     this.obj_line = new fabric.Line(
//       [370, 300, 590, 300],
//       {
//         strokeWidth: 1,
//         stroke: 'green',
//         fill: "green",
//         selectable:!1,hasControls:!1
//       });
//       this.canvas.add(this.obj_line);

//     this.img_line = new fabric.Line(
//       [150, 300, 370, 300],
//       {
//         strokeWidth: 1,
//         stroke: 'orange',
//         fill: "orange",
//         selectable:!1,hasControls:!1
//       });
//       this.canvas.add(this.img_line);

//       this.img_screen = new fabric.Polygon(
//       [
//         {x: 0, y: 150},
//         {x: 70, y: 100},
//         {x: 70, y: 250},
//         {x: 0, y: 300}
//       ],{
//       left: 150,
//       // top: 0,
      
//       stroke: 'black',
//       fill: "white",
//       selectable:!1,hasControls:!1,
//       objectCaching: false,
//     });
//     this.canvas.add(this.img_screen);

//     this.pinhole_screen = new fabric.Polygon(
//       [
//         {x: 0, y: 150},
//         {x: 70, y: 100},
//         {x: 70, y: 250},
//         {x: 0, y: 300}
//       ],{
//       left: 370,
//       // top: 0,
      
//       stroke: 'black',
//       fill: "white",
//       selectable:!1,hasControls:!1,
//       objectCaching: false,
//     });
//     this.canvas.add(this.pinhole_screen);

//     this.obj_screen = new fabric.Polygon(
//       [
//         {x: 0, y: 150},
//         {x: 70, y: 100},
//         {x: 70, y: 250},
//         {x: 0, y: 300}
//       ],{
//       left: 590,
//       // top: 0,
      
//       stroke: 'black',
//       fill: "white",
//       selectable:!1,hasControls:!1,
//       objectCaching: false,
//     });
//     this.canvas.add(this.obj_screen);


//     this.pinhole=new fabric.Circle({
//       radius:6,left:400,top:200,
//       stroke:"red",fill:"black",opacity:.9,selectable:!1,strokeWidth:1});
//       this.canvas.add(this.pinhole);

//     this.pinholeLine=new fabric.Line([406,(372-this.appertureWidth)/2+20,406,
//     (372+this.appertureWidth)/2+20],{stroke:"white",strokeWidth:4,selectable:!1,evented:!1,fill:"white"});
//     this.canvas.add(this.pinholeLine);
//     // this.arrow = new fabric.Polygon(
//     //   [
//     //     {x: 10, y: 0},
//     //     {x: 30, y: 0},
//     //     {x: 30, y: 50},
//     //     {x: 40, y: 50},
//     //     {x: 20, y: 65},
//     //     {x: 0, y: 50},
//     //     {x: 10, y: 50}
        
//     //   ],{
//     //   left: 605,
//     //   top: 180,
//     //   fill: "blue",
//     //   selectable:!1,hasControls:!1,
//     //   // objectCaching: false,
//     // });
//     // this.canvas.add(this.arrow);

//     const imageUrl = '../assets/Logo/arrow.png';

// fabric.Image.fromURL(imageUrl, (img) => {
//   img.set({
//     left: 595,
//     top: 170,
//     selectable:!1,hasControls:!1,
//     scaleX: 0.045, 
//     scaleY: 0.045
//   });
//   this.canvas.add(img);
// });
//   }
//   calculateDistance1(): void{
//     console.log("Distance 1 entered: ",this.value1);
//     this.imgSlideDistance=this.value1*20;
//   }
//   calculateDistance2(): void{
//     console.log("Distance 2 entered: ",this.value2);
//     this.objSlideDistance=this.value2*20;
//   }
//   onIncreasingDistance1(){
//     if(this.value1*20>=this.imgSlideDistance*1){
//       this.img_line = this.canvas.getObjects("line")[1];
//       this.img_line.animate({ x1:Math.abs(370 -this.value1*20) , y1: 300 }, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.img_screen = this.canvas.getObjects("polygon")[0];
//       this.img_screen.animate('left',Math.abs(370 -this.value1*20),100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text4 = this.canvas.getObjects("text")[3];
//       this.text4.animate( 'left',Math.abs(370 -this.value1*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text7 = this.canvas.getObjects("text")[6];
//       this.text7.animate( 'left',Math.abs(370 -this.value1*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       Math;

//       console.log("onIncreasingDistance1");
//     }
//   }
//   onIncreasingDistance2(){
//     if(this.value2*20>=this.objSlideDistance*1){
//       this.obj_line = this.canvas.getObjects("line")[0];
//       this.obj_line.animate({ x2: Math.abs(370+this.value2*20) ,y2: 300 }, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.obj_screen = this.canvas.getObjects("polygon")[2];
//       this.obj_screen.animate('left', Math.abs(370+this.value2*20),100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text6 = this.canvas.getObjects("text")[5];
//       this.text6.animate( 'left',Math.abs(370 +this.value2*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text8 = this.canvas.getObjects("text")[7];
//       this.text8.animate( 'left',Math.abs(370 +this.value2*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       Math;
      
//       this.img = this.canvas.getObjects("image")[0];
//       this.img.animate('left', Math.abs(375+this.value2*20),100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       console.log("onIncreasingDistance2");
//     }
//   }
//   onDecreasingDistance1(){
//     if(this.value1*20<this.imgSlideDistance*1){
//       this.img_line = this.canvas.getObjects("line")[1];
//       this.img_line.animate({ x1: Math.abs(370-this.value1*20) , y1: 300}, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.img_screen = this.canvas.getObjects("polygon")[0];
//       this.img_screen.animate('left', Math.abs(370-this.value1*20),100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text4 = this.canvas.getObjects("text")[3];
//       this.text4.animate( 'left',Math.abs(370 -this.value1*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text7 = this.canvas.getObjects("text")[6];
//       this.text7.animate( 'left',Math.abs(370 -this.value1*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       Math;
//       console.log("onDecreasingDistance1");
//     }
//   }
//   onDecreasingDistance2(){
//     if(this.value1*20<this.objSlideDistance*1){
//     this.obj_line = this.canvas.getObjects("line")[0];
//     this.obj_line.animate({ x2: Math.abs(370+this.value2*20) ,y2: 300 }, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.obj_screen = this.canvas.getObjects("polygon")[2];
//       this.obj_screen.animate( 'left',Math.abs(370 +this.value2*20) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text6 = this.canvas.getObjects("text")[5];
//       this.text6.animate( 'left',Math.abs(370 +this.value2*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       this.text8 = this.canvas.getObjects("text")[7];
//       this.text8.animate( 'left',Math.abs(370 +this.value2*20-40) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       Math;
      
//       this.img = this.canvas.getObjects("image")[0];
//       this.img.animate( 'left',Math.abs(375 +this.value2*20) ,100, 1e3, fabric.util.ease.easeOutBounce, {
//         onChange: this.canvas.renderAll.bind(this.canvas), duration: 1e3
//       }),
//       console.log("onDecreasingDistance2");
//     }
//   }
//   apply(){
//     this.onIncreasingDistance1();
//     this.onDecreasingDistance1();
//     this.onIncreasingDistance2();
//     this.onDecreasingDistance2();
//     this.canvas.remove(this.text2,this.text3);
//     // this.calculateDistance1();
//     // this.calculateDistance2();
//   }
//   reset(){

//   }
//   next(){

//   }
//   updateSlider(event: any){
//     console.log("got into slider: ",this.value);
//     this.appertureWidth=this.value;
//      this.objectBody=this.canvas.getObjects("text");
//      for(let pinhole in this.objectBody)"black"!=this.objectBody[pinhole].get("fill")&&this.canvas.remove(this.objectBody[pinhole]);
//      this.objectHead=this.canvas.getObjects("line");
//      for(let pinhole in this.objectHead)"red"!=this.objectHead[pinhole].get("fill")&&this.canvas.remove(this.objectHead[pinhole]);
//      this.pinholeLine=this.canvas.getObjects("circle");
//      for(let pinhole in this.pinholeLine)"red"!=this.pinholeLine[pinhole].get("stroke")&&this.canvas.remove(this.pinholeLine[pinhole]);
//      this.calculateInvertedTop(),
//      this.drawApperture()
//   }
//   drawApperture() {
//     throw new Error('Method not implemented.');
//   }
//   calculateInvertedTop() {
//     throw new Error('Method not implemented.');
//   }
}
