import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.css']
})
export class ShoppingEntryComponent implements OnInit {

  @Output() itemAdded =new EventEmitter<string>();

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
      const description = this.description?.value;
      this.itemAdded.emit(description); // use that output we declared and tell the parent.
    } else {
      console.log(this.form.get('description')?.errors);
    }
  }
}
