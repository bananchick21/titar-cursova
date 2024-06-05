import {Component, ViewChild} from '@angular/core';
import {GoogleMap, MapAdvancedMarker, MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    GoogleMap,
    MapAdvancedMarker,
    MapMarker
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  center:google.maps.LatLngLiteral = {
    lat: 49.5759721,
    lng: 34.5669365
  }
}
