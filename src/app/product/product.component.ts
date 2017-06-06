import { Component, OnInit } from '@angular/core';
import {ProductService,Product} from "../shared/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Product[];//声明私用属性，产品数组
  private imgUrl:string = 'http://placehold.it/320x150';
  constructor(private productService:ProductService) {//调用商品服务
      this.products = this.productService.getProducts();
  }

  ngOnInit() { //实例化后，调用一次
  }

}
//抽到product服务中去了
//export class Product{
//  constructor(
//    public id:number,
//    public price:number,
//    public name:string,
//    public desc:string,
//    public rating:number,
//    public categories:Array<string>
//  ){}
//}
