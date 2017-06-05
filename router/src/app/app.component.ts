import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router:Router){}
  toProductDetail(){
    this.router.navigate(['/product',2]);
    //这样写点了按钮再点商品连接有BUG
    //按钮和商品连接 只调用了一次ngoninit,所以productId没变
    //只为我们用了snapshot
  }
}
