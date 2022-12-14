import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})

export class InputComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() field!: string;
  @Input() type: string = 'text';
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter<string>();

  emitInput(input: string) {
    console.log('Composant fils, voici ma valeur : ' + input);
    this.inputEmitter.emit(input);
  }
}
