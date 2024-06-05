import { Component } from '@angular/core';
import {NgStyle, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgStyle,
    TitleCasePipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
