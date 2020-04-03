import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '@angular-boss/shared/domain';

@Component({
  selector: 'ab-shop-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @Output() public buy = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
