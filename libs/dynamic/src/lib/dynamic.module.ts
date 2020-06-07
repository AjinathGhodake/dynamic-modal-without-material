import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule],
  declarations: [],
  exports: []
})
export class DynamicModule {}
