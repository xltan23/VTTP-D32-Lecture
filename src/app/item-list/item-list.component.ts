import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() itemList:any[] = [];
  @Output() newItemEvent = new EventEmitter<any>(); 

  // VARIABLES
  title = "These options are clickable"

  // METHODS
  onItemClick(item:any) {
    console.info('Item received by item-list.component');
    this.newItemEvent.emit(item);
  }
}
