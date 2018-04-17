import { Directive, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective implements OnInit, OnChanges {

  @Input('appHide') isVisible: boolean;

  constructor(private el: ElementRef) {
    console.log(el);
    console.log(this.isVisible)
   }

   ngOnInit() {
     console.log('init')
     //сделать что-то при инициализации компонента, например таймер запустить, он дестрой - отписка
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)
    this.toggleVisibility(changes.isVisible.currentValue);
   }

   toggleVisibility(isVisible: boolean) {
     if (isVisible){
       this.el.nativeElement.style.visibility = 'visible'
     } else {
       this.el.nativeElement.style.visibility = 'hidden'
     }
   }


}
