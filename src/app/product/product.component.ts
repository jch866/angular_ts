import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<Product>;//声明私用属性，产品数组
  private imgUrl:string = 'http://placehold.it/320x150';
  constructor() { }

  ngOnInit() { //实例化后，调用一次
    this.products= [
      new Product(1, 10,'第1个商品','第1个商品描述',3,['电子产品','硬件设备']),
      new Product(2, 11,'第2个商品','第2个商品描述',2,['图书']),
      new Product(3, 12,'第3个商品','第3个商品描述',1,['硬件设备']),
      new Product(4, 13,'第4个商品','第4个商品描述',4,['电子产品']),
      new Product(5, 14,'第5个商品','第5个商品描述',5,['图书']),
      new Product(6, 15,'第6个商品','第6个商品描述',3.4,['电子产品','硬件设备']),
    ]//初始化数组
    this.products.push(new Product(7, 16.9,'第7个商品','第7个商品描述',7,['电子产品']))
  }

}
export class Product{
  constructor(
    public id:number,
    public price:number,
    public name:string,
    public desc:string,
    public rating:number,
    public categories:Array<string>
  ){}
}
