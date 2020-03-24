import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PublicPageComponent } from "./public-page/public-page.component";
import { BrowserPageComponent } from "./browser-page/browser-page.component";

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    BrowserPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
