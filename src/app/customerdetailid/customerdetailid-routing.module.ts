import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerdetailidComponent } from "./customerdetailid.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CustomerdetailidComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailIdRoutingModule {}
