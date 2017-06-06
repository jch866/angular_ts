import { Injectable } from '@angular/core';
import {ProductService,Product} from "./product.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService{
  getProduct():Product {
    return new Product(2,'三星手机','也不错的手机',990) ;
  }
  constructor(public logger:LoggerService) { }

}
