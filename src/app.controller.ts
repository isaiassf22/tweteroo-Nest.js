import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/saude")
  getSaude(): string {
    return "beba agua e tenha saude"
  }

  @Get("/oi")
  getOla(): string{
    return 'oi'
  }


  
}
