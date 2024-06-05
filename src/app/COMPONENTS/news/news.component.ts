import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MuseumCardComponent} from "../../SHARED/museum-card/museum-card.component";
import {MatFormField, MatInput} from "@angular/material/input";
import {NgStyle} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MuseumStoreService} from "../../SERVICES/museum-store.service";
import {Museum} from "../../MODELS/constants";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    RouterLink,
    MuseumCardComponent,
    MatInput,
    MatFormField,
    NgStyle,
    MatButton
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  museums: Museum[] = []
  filtered: Museum[] = []

  search(val: string) {
    this.filtered = this.museums.filter(value => value.name.toLowerCase().includes(val))
  }

  constructor(private store: MuseumStoreService) {
  }

  ngOnInit() {
    this.museums = this.store.getMuseums();
    this.filtered = this.museums
  }

}
