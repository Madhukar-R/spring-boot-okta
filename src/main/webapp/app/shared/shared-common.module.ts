import { NgModule } from '@angular/core';

import { SpringBootOktaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SpringBootOktaSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SpringBootOktaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringBootOktaSharedCommonModule {}
