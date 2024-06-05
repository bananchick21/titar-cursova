import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Museum} from "../../MODELS/constants";

@Component({
  selector: 'app-museum-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './museum-card.component.html',
  styleUrl: './museum-card.component.css'
})
export class MuseumCardComponent {
  public _museum!: Museum

  @Input() set museum(value: Museum) {
    this._museum = value;
  }
}
