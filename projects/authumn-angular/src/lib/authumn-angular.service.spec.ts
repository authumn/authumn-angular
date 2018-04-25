import { TestBed, inject } from '@angular/core/testing'

import { AuthumnAngularService } from './authumn-angular.service'

describe('AuthumnAngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthumnAngularService]
    })
  })

  it('should be created', inject([AuthumnAngularService], (service: AuthumnAngularService) => {
    expect(service).toBeTruthy()
  }))
})
