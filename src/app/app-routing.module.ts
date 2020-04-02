import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CustomersComponent
  },
  {
    path: "detail",
    pathMatch: "full",
    loadChildren: () =>
      import("./customer-detail/customer-detail.module").then(
        m => m.CustomerDetailModule
      )
  },
  {
    path: "id/:id",
    pathMatch: "full",
    loadChildren: () =>
      import("./customerdetailid/customerdetailid.module").then(
        m => m.CustomerdetailidModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
