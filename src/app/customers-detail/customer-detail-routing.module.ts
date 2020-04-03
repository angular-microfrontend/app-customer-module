import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerDetailComponent } from "./customer-detail.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CustomerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailRoutingModule {}
