import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExamenService } from '../examen.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  quote: any;

  nPel = new FormControl('',[Validators.required,Validators.minLength(1)]);
  date = new FormControl('',[Validators.required,Validators.minLength(1)]);
  nProd = new FormControl('',[Validators.required,Validators.minLength(1)]);
  cProd = new FormControl('',[Validators.required,Validators.minLength(1)]);
  prot = new FormControl('',[Validators.required,Validators.minLength(1)]);

  list: {nPel: string, date: string, nProd: string, cProd: string, prot: string}[] = [];

  constructor(private examen: ExamenService) {}

  ngOnInit() {
    this.examen.getData().subscribe((data) => {
      this.quote = data;
      console.log(data);
    });
  }

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
