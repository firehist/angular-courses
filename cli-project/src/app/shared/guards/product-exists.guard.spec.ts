import { TestBed, async, inject } from '@angular/core/testing';

import { ProductExistsGuard } from './product-exists.guard';

describe('ProductExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductExistsGuard]
    });
  });

  it('should ...', inject([ProductExistsGuard], (guard: ProductExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
