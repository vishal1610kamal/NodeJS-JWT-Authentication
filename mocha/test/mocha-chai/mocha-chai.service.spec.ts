import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import { MochaChaiService } from '../../src/mocha-chai/mocha-chai.service';
import { MochaChaiModule } from '../../src/mocha-chai/mocha-chai.module';

describe('MochaChaiService', () => {
  let service: MochaChaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MochaChaiModule],
    }).compile();

    service = module.get<MochaChaiService>(MochaChaiService);
  });

  it('should return "Hello from MochaChai!"', () => {
    expect(service.getHello()).to.equal('Hello from MochaChai!');
  });
});
