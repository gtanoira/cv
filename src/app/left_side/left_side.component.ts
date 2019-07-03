import { Component } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left_side.component.html',
  styleUrls: ['./left_side.component.css']
})
export class LeftSideComponent {

  // Definir variables
  personalImage = '../assets/images/foto01.jpg';
  homeAddress   = 'Pilar - Bs.As. - Argentina';
  phoneNo       = '(911) 6332 4865';
  whatsapp      = '(911) 6332 4865';
  email         = 'gonzalo.mtanoira@gmail.com';
  skype         = 'Gonzalo.Martinez.Tanoira';
  linkedIn      = 'https://?????';

  idiomas = [
    { name: 'Castellano',
    nivel: 'Nativo'
  }, {
    name: 'Inglés',
    nivel: 'Muy Bueno'
    }
  ];

  idiomaNiveles = [
  'Básico',
  'Bueno',
    'Muy Bueno',
    'Nativo'
  ];

}
