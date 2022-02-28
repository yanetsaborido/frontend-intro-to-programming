import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListItem } from 'src/app/models/shopping-models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() shoppingList: ShoppingListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
