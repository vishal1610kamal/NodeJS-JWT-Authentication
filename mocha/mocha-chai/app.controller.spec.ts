import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  // New test cases for addNumbers
  describe('addNumbers', () => {
    it('should correctly add two positive numbers', () => {
      expect(appController.addNumbers(5, 3)).toBe(8);
    });

    it('should correctly add two negative numbers', () => {
      expect(appController.addNumbers(-5, -3)).toBe(-8);
    });

    it('should correctly add a positive and a negative number', () => {
      expect(appController.addNumbers(5, -3)).toBe(2);
    });

    it('should return the same number when adding zero', () => {
      expect(appController.addNumbers(5, 0)).toBe(5);
    });
  });

});
