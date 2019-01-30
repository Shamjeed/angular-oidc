import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { AngularoidcSharedLibsModule, AngularoidcSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [AngularoidcSharedLibsModule, AngularoidcSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [AngularoidcSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularoidcSharedModule {
    static forRoot() {
        return {
            ngModule: AngularoidcSharedModule
        };
    }
}
