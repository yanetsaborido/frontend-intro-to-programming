import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.css']
})
export class ShoppingEntryComponent implements OnInit {

  form = this.formBuilder.group({
    description: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
      ]
    ]
  });

  constructor(private formBuilder: FormBuilder) {  }

  get description() { return this.form.get('description'); }
  ngOnInit(): void {
  }

  addItem() {
    if(this.form.valid) {
    console.log(this.form.value);
    } else {
      console.log(this.form.get('description')?.errors);
    }
  }
}
