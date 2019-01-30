import { NgModule } from '@angular/core';

import { AngularoidcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AngularoidcSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AngularoidcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AngularoidcSharedCommonModule {}
