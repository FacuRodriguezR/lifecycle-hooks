import { afterRender, afterRenderEffect, Component, effect, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';


const log = (...messages: string[])=> {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color:rgb(32, 230, 236)')
}


@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent { 

  traditionalProperty = 'Facundo';
  signalProperty = signal('Facundo');


  constructor(){
    log('Constructor llamado');

    // setTimeout(() => {
    //   this.signalProperty.set('Juan carlos ')
    // }, 2000);
  }


  changeTraditional(){
    this.traditionalProperty = 'Facundo Rodriguez'
  }

  changeSignal(){
  this.signalProperty.set('Facundo Rodriguez') 
  }
  basicEffect = effect(( onCleanup )=> {
    log('effect', 'Disparar efectos secundarios')

    onCleanup(()=> {
      log("onCleanup", "Se ejecuta cuando el efecto se va a destruir")
    })
  })

  ngOnInit()	{log(
    "ngOnInit"
    ,"Se ejecuta una vez después de que Angular haya inicializado todas las entradas del componente.")}
  ngOnChanges()	{log(
    "ngOnChanges"
    ,"Se ejecuta cada vez que cambian las entradas del componente.")}
  ngDoCheck()	{log(
    "ngDoCheck"
    ,"Se ejecuta cada vez que se comprueba si hay cambios en este componente.")}
  ngAfterContentInit()	{log(
    "ngAfterContentInit"
    ,"Se ejecuta una vez después de que se haya inicializado el contenido del componente .")}
  ngAfterContentChecked()	{log(
    "ngAfterContentChecked"
    ,"Se ejecuta cada vez que se verifica si se han producido cambios en el contenido de este componente.")}
  ngAfterViewInit()	{log(
    "ngAfterViewInit"
    ,"Se ejecuta una vez después de que se haya inicializado la vista del componente .")}
  ngAfterViewChecked()	{log(
    "ngAfterViewChecked"
    ,"Se ejecuta cada vez que se comprueba si hay cambios en la vista del componente.")}
    ngOnDestroy(){
      log("ngOnDestroy", "	Se ejecuta una vez antes de que se destruya el componente.")
    }

    afterNextRenderEffect = afterRenderEffect(()=> {
      log("afterNextRender", "Se ejecuta una vez la próxima vez que todos los componentes se hayan representado en el DOM.")
    })
    afterRender = afterRender(()=> {
      log("afterNextRender", "	Se ejecuta cada vez que todos los componentes se han representado en el DOM.")
    })

}
