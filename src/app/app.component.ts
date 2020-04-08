import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "halodoc-customer-module",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnChanges {
  title = "customer-module";
  currentLang: string;
  _data: any;

  @Input() data: any;
  @Output() dataUpdated = new EventEmitter();

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this._data = JSON.parse(changes.data.currentValue);
    this.updateLanguageTranslation(this._data.common.translation);
  }

  updateLanguageTranslation(lang: string) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }
}
