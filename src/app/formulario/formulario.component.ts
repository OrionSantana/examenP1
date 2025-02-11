import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonItem, IonList, IonLabel} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Validators } from '@angular/forms';

import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  imports: [IonInput, IonItem, IonList, IonLabel],
})
export class FormularioComponent  implements OnInit {

  nPel = new FormControl('',[Validators.required,Validators.minLength(1)]);
    date = new FormControl('',[Validators.required,Validators.minLength(1)]);
    nProd = new FormControl('',[Validators.required,Validators.minLength(1)]);
    cProd = new FormControl('',[Validators.required,Validators.minLength(1)]);
    prot = new FormControl('',[Validators.required,Validators.minLength(1)]);

    list: {nPel: string, date: string, nProd: string, cProd: string, prot: string}[] = [];

  constructor() { }

  ngOnInit() {}

  add(){
    if (this.Validate()){
      this.list.push({
        nPel: this.nPel.value!,
        date: this.date.value!,
        nProd: this.nProd.value!,
        cProd: this.cProd.value!,
        prot: this.prot.value!
      });
      this.nPel.reset();
      this.date.reset();
      this.nProd.reset();
      this.cProd.reset();
      this.prot.reset();
    }else{
      alert('INSERTA UN VALOR VALIDO EN CADA ESPACIO');
    }  
  }

  Validate(){
    return this.nPel.valid && this.date.valid && this.nProd.valid && this.cProd.valid && this.prot.valid;
  }

}
