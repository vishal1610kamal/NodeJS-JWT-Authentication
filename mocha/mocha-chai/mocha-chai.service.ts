import { Injectable } from '@nestjs/common';

@Injectable()
export class MochaChaiService {
  getHello(): string {
    return 'Hello from MochaChai!';
  }
}
