const path = require("path");
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as art from 'express-art-template';
import { static as resource } from 'express';


async function bootstrap() {
  const app = <any>await NestFactory.create(AppModule);

  app.engine('art', require('express-art-template'));
  

    // 处理静态文件
    app.useStaticAssets('static'); 

    // 指定模板引擎
    app.engine('art', art);
  
    // 设置模板引擎的配置项
    app.set('view options', {
        debug: process.env.NODE_ENV !== 'production',
        minimize: true,
        rules: [ 
          { test: /<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/ },
          { test: /{%([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*%}/ }
       ]
    });
    
    // 设置视图文件的所在目录
    app.setBaseViewsDir('views');
    app.setViewEngine('art');


  await app.listen(3002);
}
bootstrap();
