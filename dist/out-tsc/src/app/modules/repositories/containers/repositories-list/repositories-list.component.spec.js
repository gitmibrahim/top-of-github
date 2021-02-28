import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { RepositoriesListComponent } from './repositories-list.component';
describe('RepositoriesListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [RepositoriesListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RepositoriesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=repositories-list.component.spec.js.map