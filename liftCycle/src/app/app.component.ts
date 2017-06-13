import { Component ,OnInit,ViewChild,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked} from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ChildComponent} from './child/child.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  title = 'appComponent';

    // greeting user传递给子组件的值
  greeting:string = 'hello';
  user:{name:string} = {name:'tom'}

  divContent:string = '<div>Angular study</div>'

  @ViewChild('child1') // 装饰器获得子组件的引用
  child1:ChildComponent;

  ngOnInit():void{
  	// setInterval(()=>{
  	// 	this.child1.greet(' tom');
  	// },15000)
  	//this.child1.greet(' tom');
  	
  }

  message:string;

  ngAfterViewInit(){
    console.log('父组件视图初始化完毕');
    //this.message = 'hello' angular禁止视图已经被组装好之后再去更新
    //解决方法  但也不是太好
   //  setInterval(()=>{
  	// 	this.message = 'hello'
  	// },0)
  }
  ngAfterViewChecked(){
    console.log('父组件视图变更检测完毕')
    //this.message = 'hello' angular禁止视图已经被组装好之后再去更新
  }

   ngAfterContentInit(){
    console.log('父组件投影内容初始化完毕');
    //this.message = 'hello' angular不会报错，没有组装完成，只是投影内容完成
    
  }
  ngAfterContentChecked(){
    console.log('父组件投影内容变更检测完毕')
   }
}
