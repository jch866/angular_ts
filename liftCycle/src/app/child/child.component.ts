import { Component, OnInit ,SimpleChanges,Input,DoCheck,OnDestroy,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{
	@Input()
	greeting:string;  //变化时ngOnChanges被调用    不可变对象

	@Input()
	user:{name:string};  //变化时ngOnChanges不被调用  可变对象

  oldUserName:string;

  changeDetected:boolean = false;

  noChangeCount:number=0;

	message:string = '初始化消息'
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log('子组件视图初始化完毕')
  }
  ngAfterViewChecked(){
    console.log('子组件视图变更检测完毕')
  }
//只有在输入属性变化时才会被调用@Input    
  ngOnChanges(changes:SimpleChanges):void{
    console.dir(changes);
  	console.log(JSON.stringify(changes,null,2))
  }
//要从父组件调用子组件的greet方法
  greet(name:string){
    console.log('hello '+name);
  }

  ngAfterContentInit(){
    console.log('子组件投影内容初始化完毕');
    
  }
  ngAfterContentChecked(){
    console.log('子组件投影内容变更检测完毕')
   }

   ngOnDestroy():void{
    console.log('子组件child被销毁');
   }

  // ngDoCheck():void{
  //   if(this.user.name != this.oldUserName){
  //       this.changeDetected = true;
  //       console.log('DoCheck:user.name从'+this.oldUserName+'变为'+this.user.name);
  //       this.oldUserName = this.user.name;
  //   }
  //   if(this.changeDetected){
  //     this.noChangeCount =0
  //   }else{
  //     this.noChangeCount +=1;
  //     console.log('DoCheck:user.name没变化时ngDoCheck方法已经被调用'+this.noChangeCount +'次')
  //   }

  //    this.changeDetected = false;
  // }
}
