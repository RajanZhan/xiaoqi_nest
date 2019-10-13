import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from '../app.service';


@Controller()
export class PublicController {
  constructor(private readonly appService: AppService) { }

  @Get("/xq/api/public/downloadApp")
  @Render("download")
  download(): any {
    return { name: "hahaah" }
  }
}
