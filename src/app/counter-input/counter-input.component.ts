import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers : [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor {

  @Input() _counterValue = 0;
  @Input() counterVal = 0;
  
  constructor() { }

  get counterValue(){
    return this._counterValue;
  }

  set currentValue(val){
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  increment(){
    this.counterVal++;
  }

  decrement(){
    this.counterVal--;
  }

  writeValue(value: any) {
    if(value !== undefined){
      this.counterVal = value;
    }
  }

  propagateChange = (_:any) => {};

  registerOnChange(fn){
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
