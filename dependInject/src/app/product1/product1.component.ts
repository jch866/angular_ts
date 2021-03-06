import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";
import {Product} from "../shared/product.service";
import {AnotherProductService} from "../shared/another-product.service";

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  public  product:Product;
  constructor(private productService:ProductService){}

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}

