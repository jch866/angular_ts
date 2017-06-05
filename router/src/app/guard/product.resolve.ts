/**
 * Created by jch on 17/6/5.
 */
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ProductComponent,Product} from "../product/product.component";
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolve implements Resolve<Product>{
  constructor(private router:Router){
    //只有用@injectable装饰了 Router才能注入进来
  }
  resolve(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      let productId:number = router.params['id'];
    if(productId ==1){
      return new Product(1,'iphone');
    }else{
      this.router.navigate(['/home']);
      return undefined
    }
  }
}
