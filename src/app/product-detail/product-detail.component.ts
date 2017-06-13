import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product,ProductService,Comment} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product:Product;
  public comments:Comment[];//注意依赖Comment，augular核心模块中也有一个Comment

//保存最新星级和最新评论
  
  newRating:number =5;
  newComment:string = '';

  isCommentHidden:boolean = true;
  constructor(private routeInfo:ActivatedRoute,
              private productService:ProductService) {}

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProduct(productId)
  }
  addComment(){
    ///console.log(this.newRating+'-----'+this.newComment)
    let comment  = new Comment(0,this.product.id,new Date().toISOString(),'someBody',this.newRating,this.newComment)
    //console.log(comment);
    this.comments.unshift(comment);

    //重新计算商品星级
    let sum = this.comments.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.rating = sum/this.comments.length;

    //恢复评论textarea默认值
    this.isCommentHidden = true;
    this.newComment = '';
    // this.newRating = 5;虽然值是5，但星星还是和上一次评论的一样，所以要改stars数组的值 
    this.newRating = 5; 

     


  }
  //属性绑定是单向绑定，newRating的值所以一直是默认的5
  //[rating]='newRating'

}
