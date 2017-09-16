import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() items;
  @Output() itemAdded = new EventEmitter<string>();
  newItem = 'new item';
  
  onAddItem(event){
    this.itemAdded.emit(this.newItem);
  }
}
