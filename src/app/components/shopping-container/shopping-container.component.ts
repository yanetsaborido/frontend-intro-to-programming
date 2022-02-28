import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from 'src/app/models/shopping-models';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.css']
})
export class ShoppingContainerComponent implements OnInit {

  lastId = 4;
  list: ShoppingListItem[] = [
    { id: '1', description: 'Cheese', purchased: false},
    { id: '2', description: 'Crackers', purchased: false},
    { id: '3', description: 'Bread', purchased:true},
  ];
  constructor() { }

  ngOnInit(): void {
  }


  addNewItem(description: string) {
    const newItem: ShoppingListItem = {
      id: (this.lastId++).toString(),
      description,
      purchased: false
    }
    this.list = [newItem, ...this.list]
  }

}
