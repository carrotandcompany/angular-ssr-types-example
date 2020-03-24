import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrerenderPageComponent } from "./prerender-page/prerender-page.component";

const routes: Routes = [
  { path: "prerender", component: PrerenderPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
