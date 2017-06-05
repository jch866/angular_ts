import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private  rating:number = 0;//装饰器说明，rating属性的值应该是由它的父组件传递给它
  private  stars:boolean[];
  constructor() { }

  ngOnInit() {
    //this.stars = [false,false,true,true,true]
    this.stars = [];
    for(let i = 1;i<=5;i++){
      this.stars.push(i>this.rating);//false为实心，因为空心的样式是TRUE才有
    }
  }

}
export class Star{

}
