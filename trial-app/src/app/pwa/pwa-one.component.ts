import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa-one',
  templateUrl: './pwa-one.component.html',
  styleUrls: ['./pwa-one.component.css']
})
export class PwaOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadManifest();
  }

  loadManifest() {
    var myDynamicManifest = {
      "name": "pwa-one",
      "short_name": "pwa-one",
      "theme_color": "#000000",
      "background_color": "#ffffff",
      "display": "standalone",
      "scope": "./",
      "start_url": "./",
      "icons": [{
        "src": "assets/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "maskable any"
      }]
    }
    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);
    document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);
  }

}
