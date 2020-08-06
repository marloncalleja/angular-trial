import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa-two',
  templateUrl: './pwa-two.component.html',
  styleUrls: ['./pwa-two.component.css']
})
export class PwaTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadManifest();
  }

  loadManifest() {
    var myDynamicManifest = {
      "name": "pwa-two",
      "short_name": "pwa-two",
      "theme_color": "#551487",
      "background_color": "#000000",
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
