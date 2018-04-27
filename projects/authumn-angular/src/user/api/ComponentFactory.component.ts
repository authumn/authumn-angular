import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UserTemplates } from './templates'
import { AuthumnViewDirective } from './authumn-view.directive'

@Component({
  moduleId: module.id,
  template: `
    <ng-template authumnViewHost></ng-template>
  `
})
export class ComponentFactoryComponent implements OnInit {
  @ViewChild(AuthumnViewDirective) viewHost: AuthumnViewDirective
  constructor (
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private components: UserTemplates
  ) {
  }
  ngOnInit () {
    this.route.data
      .subscribe((data) => {
        const component = this.components[data.template]
        if (!component) {
          throw Error(`Unknown component ${data.template}`)
        }
        this.loadComponent(component)
      })
  }

  loadComponent (component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
    const viewContainerRef = this.viewHost.viewContainerRef

    viewContainerRef.clear()

    viewContainerRef.createComponent(componentFactory)
    // const componentRef = viewContainerRef.createComponent(componentFactory)
    // componentRef.instance.data = someData
  }
}
