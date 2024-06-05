import {Injectable} from '@angular/core';
import {Museum, museums} from "../MODELS/constants";

@Injectable({
  providedIn: 'root'
})
export class MuseumStoreService {
  museum: Museum[] = museums;

  constructor() {
  }

  getMuseums() {
    return museums;
  }
  getMuseumById(id: number) {
    return museums[id];
  }
}
