import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {



  //llevar el placeholder a la vista
  //search-box-component.html
  @Input()
  public placeholder: string= '';


//public onValue: new EventEmitter<string> = new EventEmitter<string>();
//crear un event emitter  myEvent = new EventEmitter();
// para enviar el evento a la vista
@Output()
public onValue = new EventEmitter<string>();
emitValue(value: string) : void {
  this.onValue.emit(value);

}

}
