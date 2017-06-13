import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }
ngOnDestroy():void{
    console.log('子组件child1被销毁');
   }
}
