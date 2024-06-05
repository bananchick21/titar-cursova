import {Routes} from '@angular/router';
import {AboutComponent} from "./COMPONENTS/about/about.component";
import {NewsComponent} from "./COMPONENTS/news/news.component";
import {MuseumDetailComponent} from "./COMPONENTS/museum-detail/museum-detail.component";
import {GalleryComponent} from "./COMPONENTS/gallery/gallery.component";
import {ContactsComponent} from "./COMPONENTS/contacts/contacts.component";

export const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "home"},
  {
    path: 'home',
    loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
  },
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news/:id', component: MuseumDetailComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contacts', component: ContactsComponent}

];
