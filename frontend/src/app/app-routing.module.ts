import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublicPageComponent } from "./public-page/public-page.component";
import { BrowserPageComponent } from "./browser-page/browser-page.component";

const routes: Routes = [
  { path: "public", component: PublicPageComponent },
  { path: "browser", component: BrowserPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
