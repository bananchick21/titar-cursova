import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs";
import {MuseumStoreService} from "../../SERVICES/museum-store.service";
import {Museum} from "../../MODELS/constants";
import {GoogleMap, MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-museum-detail',
  standalone: true,
  imports: [
    GoogleMap,
    MapMarker
  ],
  templateUrl: './museum-detail.component.html',
  styleUrl: './museum-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuseumDetailComponent implements OnInit {
  constructor(private ar: ActivatedRoute, private cdr: ChangeDetectorRef, private store: MuseumStoreService) {
  }

  center: google.maps.LatLngLiteral = {

    lat: 40,
    lng: 40,

  };
  museum!: Museum;

  ngOnInit() {
    this.ar.paramMap.pipe(take(1)).subscribe(param => {
      const id = param.get('id');
      if (id) this.museum = this.store.getMuseumById(+id);
      this.center = this.museum.coordinates
      this.cdr.markForCheck()
    })
  }
}
