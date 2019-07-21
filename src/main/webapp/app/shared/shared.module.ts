import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpringBootOktaSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SpringBootOktaSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [SpringBootOktaSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringBootOktaSharedModule {
  static forRoot() {
    return {
      ngModule: SpringBootOktaSharedModule
    };
  }
}
