import {Component, OnInit,} from '@angular/core';
import {MuseumStoreService} from "../../SERVICES/museum-store.service";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  images: string[] = []
  currentImg = ''

  ngOnInit() {
    this.images = this.store.getMuseums().flatMap(value => value.photosUrl)

    this.currentImg = this.images[0];
  }

  constructor(private store: MuseumStoreService) {
  }

  changeImg(i: number) {
    this.currentImg = this.images[i]
  }

}
