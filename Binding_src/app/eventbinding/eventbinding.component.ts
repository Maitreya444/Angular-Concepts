import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent 
{ 

  textColor = 'black';
  public changeColor() 
  {
    this.textColor = 'red';
  }
  public str = "";
  public EventHandler()
  {
    console.log('Button is pressed');
  }
  public EventHandlerNew()
  {
    this.str="Ahhh!!!!!! I'm Cummmming don't stop it MAIT";
  }
  public EventHandlerInfo(value: any)
  {
    this.str = 'Red';
    console.log(value);

  }
}
