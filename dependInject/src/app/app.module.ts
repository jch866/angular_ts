import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import {ProductService} from "./shared/product.service";
import { Product2Component } from './product2/product2.component';
import {LoggerService} from "./shared/logger.service";
import {AnotherProductService} from "./shared/another-product.service";

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //providers: [ProductService,LoggerService],
  providers: [{provide:ProductService,
    useFactory:(logger:LoggerService,appConfig)=>{//参数和deps对应关系
      //let dev = Math.random() > 0.5;
      if(appConfig.isDev){
        return new ProductService(logger);
      }else{
        return new AnotherProductService(logger)
      }
    },
    deps:[LoggerService,'app_config']//依赖项token，直接传到useFactory参数中
  },LoggerService,
    //实现变量像服务一样被依赖注入
    {
      provide:'app_config',//对象类型的token
      useValue:{isDev:true}
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
