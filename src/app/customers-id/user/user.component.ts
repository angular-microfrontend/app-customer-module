import { Component, OnInit } from "@angular/core";

@Component({
  selector: "halodoc-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  pathsplit: string[] = window.location.href.split("/");
  urlParam: string = this.pathsplit[this.pathsplit.length - 2];
  constructor() {}

  ngOnInit(): void {}
}
