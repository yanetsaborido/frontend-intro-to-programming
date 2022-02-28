import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.css']
})
export class ShoppingEntryComponent implements OnInit {

  form = this.formBuilder.group({
    description: ['']
  });

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
  }

  addItem() {
    console.log(this.form.value);
  }
}
