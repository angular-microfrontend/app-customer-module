import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

@Component({
  selector: "halodoc-customer-module",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = "customer-module";
  currentLang: string;
  _data: any;

  @Input() data: any;
  @Output() dataUpdated = new EventEmitter();

  constructor(private translate: TranslateService, private router: Router) {}

  ngOnInit() {
    
  }

  ngOnChanges(changes) {
    this._data = JSON.parse(changes.data.currentValue);
    this.updateLanguageTranslation(this._data.common.translation);
  }

  updateLanguageTranslation(lang: string) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }

  ngOnDestroy() {
    this.router.navigate(["/"]);
  }
}
