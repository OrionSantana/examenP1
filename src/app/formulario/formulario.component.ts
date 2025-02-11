import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonItem, IonList, IonLabel} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  imports: [IonInput, IonItem, IonList, IonLabel],
})
export class FormularioComponent  implements OnInit {

  nPel = new FormControl('');
  date = new FormControl('');
  nProd = new FormControl('');
  cProd = new FormControl('');
  prot = new FormControl('');

  constructor() { }

  ngOnInit() {}


}
