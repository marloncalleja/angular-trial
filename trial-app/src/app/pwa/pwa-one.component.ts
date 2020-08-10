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
  
    document.querySelector('#my-manifest-placeholder').setAttribute('href', 'assets/manifest-test.json');

  }

}
