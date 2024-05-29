import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {BackendService} from "../SERVICES/backend.service";
import {News} from "../MODELS/models";
import {Observable} from "rxjs";

export const newsResolver: ResolveFn<Observable<News[]>> = (route, state) => {
  const backendS = inject(BackendService);
  return backendS.getNews<News[]>();
};
