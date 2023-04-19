import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-peso-adolar',
  templateUrl: './peso-adolar.component.html',
  styleUrls: ['./peso-adolar.component.scss']
})
export class PesoADolarComponent {
  
  dolaresList: string[] = [];
  tipoList : string []=["Compra","Venta"];
  valorCambio: number | undefined;
  @ViewChild('pesos') pesos: ElementRef | undefined;
  nombre: string = "";
  tipo: string = "";

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
    let valorDolarObservable = await this.dolarService.getValorDolarByName(dolarconvertido,this.tipo);
    valorDolarObservable.subscribe((valorDolar: number) => {
      this.valorCambio = parseFloat(this.pesos?.nativeElement.value || "0") / valorDolar;
    });
  }


}
