import {Component, OnInit, Input} from '@angular/core';
import {Log} from '../log';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() log: Log;

  constructor() {
  }

  ngOnInit() {
  }

}
