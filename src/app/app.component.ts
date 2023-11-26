import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';

  getName(){
    alert("Hello");
  }
  displayVal='';
  getValue(val:string){
    console.warn(val);
    this.displayVal=val;
  }

  count=0;
  counter(type:string)
  {
    type==='add'?this.count++ : this.count--;
  }
}
