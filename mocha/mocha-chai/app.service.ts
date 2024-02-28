import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // New method for adding two numbers
  addNumbers(a: number, b: number): number {
    return a + b;
  }
}
