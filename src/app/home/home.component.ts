import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private imgUrl:string = 'http://placehold.it/320x150';
	private isFalse:boolean = true;
	//private size:number = 3;
	//private divClass:string;
  constructor() {
  	// setTimeout(()=>{this.divClass='a b c'},3000)
  }

  ngOnInit() {
  }
  // doOnClick(event:any){
  //   console.log(event);
  // }
  //  doOnInputVal(event:any){
  //   console.log(event.target.value);//Dom属性 变化 
  //   console.log(event.target.getAttribute('value'));//html属性 初始化时是什么就是什么 不变化  
  // }
  // onButton(){
  // 	console.log('button is not disabled!')
  // }
}
