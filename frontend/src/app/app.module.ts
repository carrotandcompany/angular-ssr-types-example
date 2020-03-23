import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PublicPageComponent } from "./public-page/public-page.component";
import { PrerenderPageComponent } from "./prerender-page/prerender-page.component";

@NgModule({
  declarations: [AppComponent, PublicPageComponent, PrerenderPageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
