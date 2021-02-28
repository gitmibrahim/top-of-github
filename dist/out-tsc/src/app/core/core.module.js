import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        declarations: [HeaderComponent],
        imports: [
            SharedModule
        ],
        exports: [HeaderComponent]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map