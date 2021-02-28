import { TestBed } from '@angular/core/testing';
import { RepositoriesFacadeService } from './repositories.facade.service';
describe('RepositoriesFacadeService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RepositoriesFacadeService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=repositories.facade.service.spec.js.map