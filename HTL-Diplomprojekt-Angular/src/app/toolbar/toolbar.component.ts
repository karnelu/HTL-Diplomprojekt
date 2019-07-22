import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})



export class ToolbarComponent implements OnInit {


  title = 'angularTitle';

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }


  gettitle() {
    return this.titleService.getTitle();
  }


  getrouter(){
    return this.router;
  }

}


