import {CanActivate} from '@Angular/router';
export class LoginGuard implements CanActivate{
  canActivate(){
    const A = Math.random();
    let logined:boolean = A < 0.5
    if(!logined){
      console.log(`unlogined ${A}`)
    }else{
      console.log(`logined ${A}`)
    }
    return logined;
  }
}
