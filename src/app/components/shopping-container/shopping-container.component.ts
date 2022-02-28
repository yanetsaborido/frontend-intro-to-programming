import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from 'src/app/models/shopping-models';
import { environment } from 'src/environments/environment'; // never import any other environment, just this one.
@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.css']
})
export class ShoppingContainerComponent implements OnInit {

  lastId = 4;
  list: ShoppingListItem[] = [];

  constructor(private httpClient:HttpClient) { /* angular constructors are usually empty*/ }

  ngOnInit(): void {
    this.httpClient.get<{ data: ShoppingListItem[] }>(`${environment.shoppingApi}shopping-list`).subscribe(response => this.list = response.data)
  }


  addNewItem(description: string) {

    this.httpClient.post<ShoppingListItem>(`${environment.shoppingApi}shopping-list`, { description }).subscribe(response => {
      this.list = [response, ...this.list]
    });
  }

}
