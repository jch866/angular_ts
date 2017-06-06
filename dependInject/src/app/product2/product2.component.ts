import { Component, OnInit } from '@angular/core';
import {Product,ProductService} from "../shared/product.service";
import {AnotherProductService} from "../shared/another-product.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
  //相同的token provide,不同的useClass
//  providers:[{
//    provide:ProductService,useClass:AnotherProductService
//}]
})
export class Product2Component implements OnInit {
  public  product:Product;
  constructor(private productService:ProductService){}

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
