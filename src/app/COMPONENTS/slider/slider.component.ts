import {Component, OnInit, signal} from '@angular/core';
import {interval, map} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MuseumStoreService} from "../../SERVICES/museum-store.service";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIcon
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  index: number = 0;
  museumsUrl: string[] = [];

  constructor(private store: MuseumStoreService) {
  }

  indexSignal = signal(0)

  ngOnInit() {
    const mus = this.store.getMuseums()
    this.museumsUrl = mus.flatMap(musItem => musItem.photosUrl);
    this.startImageCycle();
  }

  startImageCycle() {
    interval(8000).pipe(
      map(() => {
        this.indexSignal.set((this.index + 1) % this.museumsUrl.length);
      })
    ).subscribe();
  }

  changeMuseum(operator: '+' | '-') {
    switch (operator) {
      case '+':
        this.index = (this.index + 1) % this.museumsUrl.length;
        break;
      case '-':
        this.index = (this.index - 1 + this.museumsUrl.length) % this.museumsUrl.length;
        break;
    }
    this.indexSignal.set(this.index);
  }

}
