import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { createCustomElement } from "@angular/elements";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerFilterComponent } from "./customers/customer-filter/customer-filter.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFilterComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  entryComponents: [CustomersComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(CustomersComponent, {
      injector: this.injector
    });
    customElements.define("analytics-counter", el);
  }
}
