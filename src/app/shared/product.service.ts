import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products:Product[] = [
  new Product(1, 10,'第1个商品','第1个商品描述',3,['电子产品','硬件设备']),
  new Product(2, 11,'第2个商品','第2个商品描述',2,['图书']),
  new Product(3, 12,'第3个商品','第3个商品描述',1,['硬件设备']),
  new Product(4, 13,'第4个商品','第4个商品描述',4,['电子产品']),
  new Product(5, 14,'第5个商品','第5个商品描述',5,['图书']),
  new Product(6, 15,'第6个商品','第6个商品描述',3.4,['电子产品','硬件设备']),
];//初始化数组

  private comments:Comment[] =[
      new Comment(1,1,'2017-02-02 22:23:56','tom',3.4,'商品好'),
      new Comment(2,1,'2017-02-12 22:23:56','jom',4.4,'商品好'),
      new Comment(3,2,'2017-04-02 22:23:56','angular',5,'商品好'),
      new Comment(4,2,'2017-05-02 22:23:56','jave',2,'商品好'),
      new Comment(5,3,'2017-08-02 22:23:56','js',2.5,'商品好'),
      new Comment(6,4,'2017-11-02 22:23:56','ts',1.8,'商品好'),
      new Comment(7,4,'2017-10-02 22:23:56','hello',1,'商品好'),
  ];
  constructor() { }

  getProducts():Product[]{
      return this.products;
  }
  getProduct(id:number):Product{
      return this.products.find((product)=> product.id == id)
  }
  getCommentsForProduct(id:number):Comment[]{
  return this.comments.filter((comment:Comment)=>comment.productId == id)
  }
}
//封装产品类
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

//封装评论类
export class Comment {
  constructor(
      public id:number,
      public productId:number,
      public timestamp:string,
      public user:string,
      public rating:number,
      public content:string
  ){}
}