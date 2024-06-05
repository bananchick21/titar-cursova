import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SliderComponent} from "../COMPONENTS/slider/slider.component";
import {MuseumCardComponent} from "../SHARED/museum-card/museum-card.component";
import {NgIf} from "@angular/common";
import {Museum} from "../MODELS/constants";
import {MuseumStoreService} from "../SERVICES/museum-store.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    SliderComponent,
    MuseumCardComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  museums!: Museum[];

  constructor(private museumStoreService: MuseumStoreService) {
  }

  ngOnInit() {
    this.museums = this.museumStoreService.getMuseums();
  }

}
