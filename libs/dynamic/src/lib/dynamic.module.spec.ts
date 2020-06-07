import { async, TestBed } from '@angular/core/testing';
import { DynamicModule } from './dynamic.module';

describe('DynamicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DynamicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DynamicModule).toBeDefined();
  });
});
