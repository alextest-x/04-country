import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {


private apiUrl: string = 'https://restcountries.com/v3.1/'

constructor(private http: HttpClient) { }


//metodo para el country-page.component.ts y country-page.component.Html
searchCountryByAlphaCode( code: string): Observable<Country | null>  {
  //const url= `${ this.apiUrl }/capital/${ term }`;
  const url= `${ this.apiUrl }/alpha/${ code }`;
  return this.http.get<Country[]>( url )
  .pipe(
    //map transfoma la informacion
    //el observador regresa un rreglo de paises
    // countries > 0 entonces hay uno o mas entonces regresa en la posion cero osea el primero
    //sino existe regresa un null
    map( countries => countries.length > 0 ? countries [0]: null),
    catchError( () => of ( null ) ),
    //delay(2000),
  );
}

/*
  //se recibe el term y va a regresar un observable con tipo de dato mas de uno un arreglo de country
  //entonces hay que poner en el get el tipo de dato get<Country[]>
  //para escuchar hay que poner un subcribe para que se ejecute la instruccion

  searchCapital ( term: string  ) : Observable <Country[]> {
    const url = `${ this.apiUrl}/capital/${ term }`
    return this.http.get<Country[]>(url);
     }
*/

 //detectar el error catchError utilizando pipe regresando un nuevo observador
 //con el of de rxjs
 //que construye un observador basado en el argumento que le mandamos
 //y regresa un arreglo vacio
searchCapital ( term: string  ) : Observable <Country[]> {

  const url = `${ this.apiUrl}/capital/${ term }`;

  return this.http.get<Country[]>( url)
  //con el pipe para poner el error
  .pipe(
    catchError( () => of([]) ),
    //delay(2000),
    //catchError(error => of([]))
  );
 }


searchCountry( term: string ): Observable <Country[]>{
   //https://restcountries.com/v3.1/name/{name}?fullText=true

    const url = `${ this.apiUrl}/name/${ term }`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError( () => of([]) ),
      //delay(2000),
    );

  }



   searchRegion( region: string): Observable <Country[]>{
    // https://restcountries.com/v3.1/region/{region}

    const url = `${ this.apiUrl}/region/${ region }`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( () => of([]) ),
      //delay(2000),
    );

    }

}
