import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {ProductComponent } from './product/product.component';
import {ChatComponent } from './chat/chat.component';
import {Code404Component } from './code404/code404.component';
import {ProductDescComponent } from './product-desc/product-desc.component';
import {SellerInfoComponent } from './seller-info/seller-info.component';
import {LoginGuard } from './guard/login.guard';
import {UnsavedGuard } from './guard/unsaved.guard';
import {ProductResolve} from "./guard/product.resolve";

const routes: Routes = [
  //以下配置是根路由
  {
    path: '', //配置路径的时候不能加/
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home', //配置路径的时候不能加/
    component:HomeComponent
  },
  {
    path: 'chat',
    component:ChatComponent,
    outlet:'aux'
  },
  {
    ////子路由  地址栏里是路由组合而成如：product/1/seller/2
    //path: 'product',//配置路径的时候不能加/
    path: 'product/:id',//配置路径的时候不能加/
    component:ProductComponent,
    children:[
      {path:'',component:ProductDescComponent},
      {path:'seller/:id',component:SellerInfoComponent},
    ],
    //canActivate:[LoginGuard], //多个进入守卫，只要一个不行，就阻止
    //canDeactivate:[UnsavedGuard] //多个离开守卫，只要一个不行，就阻止
    resolve:{
      product:ProductResolve
    }
  },
  {
    path: '**',//通配符路由放在最后/
    component:Code404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard,UnsavedGuard,ProductResolve]
})
export class AppRoutingModule { }
