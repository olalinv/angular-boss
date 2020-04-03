import { Product } from '@angular-boss/shared/domain';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-products-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {
  @Input() public product: Product;
  constructor() { }

  ngOnInit() {
  }

}
