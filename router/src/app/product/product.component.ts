import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId:number;
  private productName:string;
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    //参数订阅rxjs
    this.routerInfo.params.subscribe((params:Params)=>this.productId=params['id'])
    //参数快照
    //this.productId = this.routerInfo.snapshot.params['id'];

    this.routerInfo.data.subscribe((data:{product:Product})=>{
      this.productId = data.product.id;
      this.productName = data.product.name;
    })
  }

}
export class Product{
  constructor(public id:number,public name:string){

  }
}
