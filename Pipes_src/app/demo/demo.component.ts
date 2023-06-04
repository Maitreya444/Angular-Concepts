import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
  name = "Maitreya Gangurde"
  today = new Date();
  girls = [{name : 'bosslady is the best <33', location : "Nashik"}]
}
