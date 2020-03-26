import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";
import { CustomersDetailComponent } from "./customers/customers-detail.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CustomersComponent
  },
  { path: ":id", component: CustomersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
