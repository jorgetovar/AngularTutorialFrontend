import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Log } from '../log';
import { LOG_LIST } from '../log-const';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'product1'
  };

  logList: Log[] = LOG_LIST;

  selected: Log;

  constructor() { }

  ngOnInit() {
  }

  onSelect(log: Log): void {
    this.selected = log;
  }

}
