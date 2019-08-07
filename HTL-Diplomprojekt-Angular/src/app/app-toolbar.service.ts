import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';


export class SidenavItem {
  path: string;
  title: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppToolbarService {
  activeSidenavItem$: Observable<SidenavItem>;

  constructor(
    private router: Router,
    private titleService: Title) {
    this.activeSidenavItem$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(_ => this.router.routerState.root),
      map(route => {
        let active = this.lastRouteWithSidenavItem(route.root);
        this.titleService.setTitle(active.title);
        return active;
      }));
  }
  getSidenavItems(): SidenavItem[] {
    return this.router.config
      .filter(route => route.data && route.data.title) //only add a sidenav item for routes with a title set.
      .map(route => {
        return {
          path: route.path,
          title: route.data.title,
          icon: route.data.icon
        };
      });
  }

  private lastRouteWithSidenavItem(route: ActivatedRoute): SidenavItem {
    let lastSidenav = undefined;
    do {
      lastSidenav = this.extractSidenav(route) || lastSidenav;
    } while ((route = route.firstChild));
    return lastSidenav;
  }
  private extractSidenav(route: ActivatedRoute): SidenavItem {
    let cfg = route.routeConfig;
    return cfg && cfg.data && cfg.data.title
      ? { path: cfg.path, title: cfg.data.title, icon: cfg.data.icon }
      : undefined;
  }
}
