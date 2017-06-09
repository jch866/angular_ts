import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/** list 商品列表 .	filterField商品属性字段 keyword 搜索关键字**/
  transform(list: any[], filterField: string,keyword:string): any {
    if(!filterField || !keyword){
    	return list;
    }
    return list.filter(item=>{
    	let fieldValue =  item[filterField];
    	// if(fidldValue.indexOf(keyword) >=0){
    	// 	return true;
    	// }
    	return fieldValue.indexOf(keyword) >=0
    })
  }

}
