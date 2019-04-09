import { NgModule, ModuleWithProviders } from "@angular/core";
import { JL } from "jsnlog";
import { JSNLogService } from "./jsnlog.service";

@NgModule({
  providers: [{ provide: "JSNLOG", useValue: JL }]
})
export class JSNLogModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: JSNLogModule,
      providers: [JSNLogService]
    };
  }
}
