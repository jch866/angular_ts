/**
 * Created by jch on 17/6/5.
 */
import {CanDeactivate} from '@Angular/router';
import { ProductComponent } from '../product/product.component';

export class UnsavedGuard implements CanDeactivate<ProductComponent>{
  canDeactivate(component:ProductComponent){
    return window.confirm('还没有保存确定要离开吗？')
  }
}
