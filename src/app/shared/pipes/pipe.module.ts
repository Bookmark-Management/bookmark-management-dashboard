import { ModuleWithProviders, NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [],
  declarations: [FilterPipe],
  exports: [FilterPipe],
})
export class CustomPipeModule {
  static forRoot(): ModuleWithProviders<CustomPipeModule> {
    return {
      ngModule: CustomPipeModule,
      providers: [],
    };
  }
}
