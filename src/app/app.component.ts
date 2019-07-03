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
    // Argentina
    this.matIconRegistry.addSvgIcon(
      'argentina',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/argentina.svg')
    );
    // Argentina-round
    this.matIconRegistry.addSvgIcon(
      'argentina-round',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/argentina-round.svg')
    );
    // Dot-solid
    this.matIconRegistry.addSvgIcon(
      'dotSolid',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/dot-solid.svg')
    );
    // Dot-outline
    this.matIconRegistry.addSvgIcon(
      'dotOutline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/dot-outline.svg')
    );
    // Email
    this.matIconRegistry.addSvgIcon(
      'email',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/email.svg')
    );
    // Gps
    this.matIconRegistry.addSvgIcon(
      'gps',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/gps.svg')
    );
    // Home
    this.matIconRegistry.addSvgIcon(
      'homeAddress',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/home.svg')
    );
    // LinkedIn
    this.matIconRegistry.addSvgIcon(
      'linkedIn',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/linkedin-logo.svg')
    );
    // Phone
    this.matIconRegistry.addSvgIcon(
      'phone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/phone.svg')
    );
    // Skype
    this.matIconRegistry.addSvgIcon(
      'skype',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/skype.svg')
    );
    // Whatsapp
    this.matIconRegistry.addSvgIcon(
      'whatsapp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/whatsapp-logo.svg')
    );
  }
}
