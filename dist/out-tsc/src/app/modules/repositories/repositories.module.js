import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RepositoryComponent } from './components/repository/repository.component';
import { RepositoriesListComponent } from './containers/repositories-list/repositories-list.component';
let RepositoriesModule = class RepositoriesModule {
};
RepositoriesModule = __decorate([
    NgModule({
        declarations: [RepositoryComponent, RepositoriesListComponent],
        imports: [
            SharedModule
        ]
    })
], RepositoriesModule);
export { RepositoriesModule };
//# sourceMappingURL=repositories.module.js.map