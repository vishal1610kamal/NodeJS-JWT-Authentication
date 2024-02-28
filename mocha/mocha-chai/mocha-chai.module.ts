import { Module } from '@nestjs/common';
import { MochaChaiService } from './mocha-chai.service';

@Module({
  providers: [MochaChaiService],
  exports: [MochaChaiService],
})
export class MochaChaiModule { }
