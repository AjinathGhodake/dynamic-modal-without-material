import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { DynamicComponent } from './dynamic';
import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  Type,
  ComponentFactory,
  InjectionToken,
  Injector
} from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  componentPortal: any;
  overlayRef: any;
  constructor(private overlay: Overlay, private injector: Injector) {}

  open(component: DynamicComponent) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      panelClass: '',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
    this.overlayRef = this.overlay.create(overlayConfig);
    const componentPortal = new ComponentPortal(
      component.component,
      null,
      this.createInjector(component.data)
    );
    this.overlayRef.attach(componentPortal);
    this.overlayRef.backdropClick().subscribe(a => {
      this.overlayRef.detach();
    });
  }
  createInjector(dataToPass): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
  }
  public close() {
    this.overlayRef.detach();
  }
}
