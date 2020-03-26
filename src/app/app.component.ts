import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "halodoc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = "customer-module";
}
