import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//enableProdMode开启开发者功能
import { enableProdMode } from '@angular/core';
//environment环境配置
import { environment } from './environments/environment';
//AppModule主模块
import { AppModule } from './app/app.module';

if (environment.production) {//如果是生产环境，关闭开发者模式
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
