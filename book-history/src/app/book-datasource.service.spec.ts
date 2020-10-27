import { TestBed } from '@angular/core/testing';

import { BookDatasourceService } from './book-datasource.service';

describe('BookDatasourceService', () => {
  let service: BookDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
