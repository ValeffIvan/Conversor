import { Component, ElementRef, ViewChild } from '@angular/core';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-dolar-apeso',
  templateUrl: './dolar-apeso.component.html',
  styleUrls: ['./dolar-apeso.component.scss']
})
export class DolarAPesoComponent {
  
  dolaresList: string[] = [];
  tipoList : string []=["Compra","Venta"];
  valorCambio: number | undefined;
  @ViewChild('dolares') dolares: ElementRef | undefined;
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
      this.valorCambio = parseFloat(this.dolares?.nativeElement.value || "0") * valorDolar;
    });
  }


}
