import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { createCustomElement } from "@angular/elements";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerFilterComponent } from "./customers/customer-filter/customer-filter.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: "http://localhost:7454/api/",
      suffix: ".json",
    },
    {
      prefix: "http://localhost:7454/customer/",
      suffix: ".json",
    },
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFilterComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/customers" }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  customElement;
  constructor(private injector: Injector) {
    // if (!customElements.get("halodoc-customer-module")) {
    this.customElement = createCustomElement(AppComponent, { injector });
    customElements.define("halodoc-customer-module", this.customElement);
    // } else {
    //   console.warn(`${name} has been defined twice`);
    // }
  }
  ngDoBootstrap() {}
}
