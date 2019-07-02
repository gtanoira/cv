import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: "wrapper"
  }
})
export class AppComponent {
  title = 'Gonzalo Tanoira';

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {

    // Definir iconos
    // Home
    this.matIconRegistry.addSvgIcon(
      'homeAddress',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/home.svg')
    );
    // Phone
    this.matIconRegistry.addSvgIcon(
      'phone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/phone.svg')
    );
    // Gps
    this.matIconRegistry.addSvgIcon(
      'gps',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/gps.svg')
    );
  }
}
