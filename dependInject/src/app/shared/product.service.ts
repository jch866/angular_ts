import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

  constructor(public logger:LoggerService) { }
  getProduct():Product{
    this.logger.log('LoggerService被调用')
    return new Product(1,'苹果','好手机',8888)
  }
}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public desc:string,
    public price:number
  ){

  }
}
