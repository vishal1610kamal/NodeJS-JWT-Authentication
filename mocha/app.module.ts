import { Module } from '@nestjs/common';
import { MochaChaiModule } from './mocha-chai/mocha-chai.module';

@Module({
  imports: [MochaChaiModule],
})
export class AppModule { }
