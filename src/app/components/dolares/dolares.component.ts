import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-dolares',
  templateUrl: './dolares.component.html',
  styleUrls: ['./dolares.component.scss']
})
export class DolaresComponent {
  
  dolaresList: string[] = [];
  valorCambio: number | undefined;
  @ViewChild('pesos') pesos: ElementRef | undefined;
  nombre: string = "";

  constructor(private dolarService: DolarService) {}

  ngOnInit(): void {
    this.dolarService.getDolaresType().then(
      (data: Array<string>) => {
        console.log(data);
        this.dolaresList = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  async convertir() {
    let dolarconvertido = await this.dolarService.getDolarByName(this.nombre!);
    let valorDolarObservable = await this.dolarService.getValorDolarByName(dolarconvertido);
    valorDolarObservable.subscribe((valorDolar: number) => {
      this.valorCambio = parseFloat(this.pesos?.nativeElement.value || "0") / valorDolar;
    });
  }


}
