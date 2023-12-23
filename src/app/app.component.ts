import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Box-pinhole-game';
  value: any;
  value1: any;
  imgDistance: number;
  objDistance: number;
  // canvas: any;
  constructor() {
    this.imgDistance=220;
    this.objDistance=220;
  }
  ngOnInit(): void {
    var canvas = new fabric.Canvas('c', {
      width: 800,
      height: 400,
      backgroundColor: '#f7f6f2',
    });
    canvas.renderAll();
    var text = new fabric.Text('Level 1', {fontSize: 20});
    canvas.add(text);
    var text = new fabric.Text('Distance 1', {fontSize: 20,
      left: 200,
      top: 280});
    canvas.add(text);
    var text = new fabric.Text('Distance 2', {fontSize: 20,
      left: 450,
      top: 280});
    canvas.add(text);
    var text = new fabric.Text('Image screen ', {fontSize: 15,
      left: 90,
      top: 300});
    canvas.add(text);
    var text = new fabric.Text('Pinhole screen ', {fontSize: 15,
      left: 330,
      top: 300});
    canvas.add(text);
    var text = new fabric.Text('Object screen ', {fontSize: 15,
      left: 540,
      top: 300});
    canvas.add(text);
    var text = new fabric.Text('Height - x cm ', {fontSize: 15,
      left: 90,
      top: 320});
    canvas.add(text);
    var text = new fabric.Text('Height - 5 cm ', {fontSize: 15,
      left: 540,
      top: 320});
    canvas.add(text);

    var obj_line = new fabric.Line(
      [370, 300, 610, 300],
      {
        strokeWidth: 1,
        stroke: 'green',
        fill: "green",
        selectable: false
      });
    canvas.add(obj_line);

    var img_line = new fabric.Line(
      [130, 300, 370, 300],
      {
        strokeWidth: 1,
        stroke: 'orange',
        fill: "orange",
        selectable: false
      });
    canvas.add(img_line);

    var img_screen = new fabric.Polygon(
      [
        {x: 0, y: 150},
        {x: 70, y: 100},
        {x: 70, y: 250},
        {x: 0, y: 300}
      ],{
      left: 130,
      // top: 0,
      
      stroke: 'black',
      fill: "white",
      selectable: false,
      objectCaching: false,
    });
    canvas.add(img_screen);

    var pinhole_screen = new fabric.Polygon(
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
      selectable: false,
      objectCaching: false,
    });
    canvas.add(pinhole_screen);

    var obj_screen = new fabric.Polygon(
      [
        {x: 0, y: 150},
        {x: 70, y: 100},
        {x: 70, y: 250},
        {x: 0, y: 300}
      ],{
      left: 610,
      // top: 0,
      
      stroke: 'black',
      fill: "white",
      selectable: false,
      objectCaching: false,
    });
    canvas.add(obj_screen);

    var arrow = new fabric.Polygon(
      [
        {x: 10, y: 0},
        {x: 30, y: 0},
        {x: 30, y: 50},
        {x: 40, y: 50},
        {x: 20, y: 65},
        {x: 0, y: 50},
        {x: 10, y: 50}
        
      ],{
      left: 605,
      top: 180,
      fill: "blue",
      selectable: false,
      // objectCaching: false,
    });
    canvas.add(arrow);
  }
  calculateDistance1(event1: any): void{
    console.log("Distance 1 entered: ",this.value);
    this.imgDistance=this.value;
  }
  calculateDistance2(event2: any): void{
    console.log("Distance 2 entered: ",this.value1);
    this.objDistance=this.value1;
  }
  apply(){

  }
  reset(){

  }
  next(){

  }
  updateSlider(_event: any){
    console.log("got into slider: ",this.value);
  }
}
