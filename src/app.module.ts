import { Module } from '@nestjs/common';
import { PublicController } from './controller/app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PublicController],
  providers: [AppService],
})
export class AppModule {}
