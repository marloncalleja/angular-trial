import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa-three',
  templateUrl: './pwa-three.component.html',
  styleUrls: ['./pwa-three.component.css']
})
export class PwaThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadManifest();
  }

  loadManifest() {
    var myDynamicManifest = {
     
    }
    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);
    document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);
  }

}
