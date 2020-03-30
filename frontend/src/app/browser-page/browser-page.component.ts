import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-public-page",
  templateUrl: "./browser-page.component.html",
  styleUrls: ["./browser-page.component.css"]
})
export class BrowserPageComponent implements OnInit {
  renderer: string;
  currentTime: string;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.renderer = isPlatformBrowser(platformId) ? "Browser" : "Server";
    this.currentTime = new Date().toLocaleString();
  }

  ngOnInit(): void {}
}
