import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // VARIABLES
  title = 'D32 Angular';
  items = [
    {name:'iPhone14', id:1, price:1250},
    {name:'MacBook', id:2, price:2500},
    {name:'AirPods', id:3, price:350}
  ];
  selectedItem:any;

  // METHODS
  onItemReceive(item:any) {
    console.info('Item received by app.component');
    this.selectedItem = item;
  }
}
