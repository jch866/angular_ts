import { Component, OnInit } from '@angular/core';
import {ProductService,Product} from "../shared/product.service";
import { FormControl } from '@angular/forms';
import 'rxjs/Rx'; //subs cribe

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private keyword:string;
  private products:Product[];//声明私用属性，产品数组
  private imgUrl:string = 'http://placehold.it/320x150';
  private titleFilter:FormControl = new FormControl();
  constructor(private productService:ProductService) {//调用商品服务
      this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value=>this.keyword = value
        );
  }

  ngOnInit() { //实例化后，调用一次
    this.products = this.productService.getProducts();
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
