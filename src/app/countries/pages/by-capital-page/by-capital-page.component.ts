//import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
//import { CountriesModule } from '../../countries.module';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  //inicializamos el arrglo para mostrarlo en Html
  //que lo usamos en el subscribe
  public countries: Country[]=[];
  public isLoading: boolean= true;

  //hay que inyectar el servicio para llamar el servicio desde aqui
  constructor (private countriesService: CountriesService){}

 //hay que poner el subscribe para que llegen las notificaciones
 //y countries muestre los paises

  searchByCapital( term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital( term )
    .subscribe(countries => {
      this.countries= countries;
      this.isLoading = false;

      console.log('Desde ByCapitalPage');
      console.log({term});


  });
}


}
