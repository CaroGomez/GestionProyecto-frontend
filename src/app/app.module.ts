import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UdeaNavbarModule} from "./features/udea-navbar/udea-navbar.module";
import {RouterModule} from "@angular/router";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {UdeaProjectRegistrationModule} from "./features/udea-project-registration/udea-project-registration.module";
import {UdeaProjectListModule} from "./features/udea-project-list/udea-project-list.module";
import {
  IgxPieChartModule,
  IgxLegendModule,
  IgxItemLegendModule
} from "igniteui-angular-charts";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UdeaNavbarModule,
    UdeaProjectRegistrationModule,
    HttpClientModule,
    UdeaProjectListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    RouterModule,
    IgxPieChartModule,
    IgxLegendModule,
    IgxItemLegendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
