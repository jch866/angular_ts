import { Component, OnInit,SimpleChanges,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit{

  @Input()
  private  rating:number = 0;//装饰器说明，rating属性的值应该是由它的父组件传递给它

 @Output()
 private ratingChange:EventEmitter<number> = new EventEmitter();
 //输入rating;输出必须叫rating+Change 模板才能用[(rating)]='newRating'这种方法
 //如果不叫ratingChange这个名字比如叫aEvent ，模板中要这样写[rating]='newRating'  (aEvent)='ChangeNewRating()';
//通过ChangeNewRating方法来改变newRating,来实现双向绑定
  

  private  stars:boolean[];

  @Input()
  private readonly:boolean = true;

  
  constructor() { }

  ngOnInit() {
   
  }
  ngOnChanges(changes:SimpleChanges){
     //this.stars = [false,false,true,true,true]
    this.stars = [];
    for(let i = 1;i<=5;i++){
      this.stars.push(i>this.rating);//false为实心，因为空心的样式是TRUE才有
    }
  }
  clickStar(index:number){
    if(!this.readonly){
      this.rating = index+1; //改变输入属性rating，会触发OnChanges
      //this.ngOnInit();
      this.ratingChange.emit(this.rating);//发射值，实现双向绑定[(rating)]='newRating'
    }
  }

}
export class Star{

}
