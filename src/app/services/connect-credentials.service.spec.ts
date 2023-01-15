import { TestBed } from '@angular/core/testing';

import { ConnectCredentialsService } from './connect-credentials.service';

describe('ConnectCredentialsService', () => {
  let service: ConnectCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
