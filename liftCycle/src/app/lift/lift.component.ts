import { Component, OnInit ,Input,SimpleChanges,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked } from '@angular/core';

let logIndex:number=1;

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
	@Input()
	name:string;

	logIt(msg:string){
		console.log(`${logIndex++} ${msg}`)
	}
	//生命周期钩子演示顺序
  constructor() {
  	this.logIt('name属性在constructor里的值是：'+name)
  }
  ngOnChanges(changes:SimpleChanges):void{
  	let name = changes['name'].currentValue
  	this.logIt('name属性在ngOnChanges里的值是：'+name)
  }
  ngOnInit() {
  	this.logIt('ngOnInit')
  }
  ngDoCheck():void{this.logIt('ngDoCheck')}
  ngAfterContentInit():void{this.logIt('ngAfterContentInit')}
  ngAfterContentChecked():void{this.logIt('ngAfterContentChecked')}
  ngAfterViewInit():void{this.logIt('ngAfterViewInit')}
  ngAfterViewChecked():void{this.logIt('ngAfterViewChecked')}
  ngOnDestroy():void{this.logIt('ngOnDestroy')}
}
