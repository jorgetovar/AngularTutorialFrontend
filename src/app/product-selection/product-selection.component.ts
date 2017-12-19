import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {Log} from '../log';
import {MOCK_LIST} from '../mock-list';
import {LogProviderService} from '../log-provider.service';

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

  logList: Log[];


  selected: Log;

  constructor(private logProviderService: LogProviderService) {
  }

  ngOnInit() {
    this.getLogs();
  }

  getLogs(): void {
    this.logProviderService.getLogs().subscribe(logs => this.logList = logs);
  }

  onSelect(log: Log): void {
    this.selected = log;
  }

}
