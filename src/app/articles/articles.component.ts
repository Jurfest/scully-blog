import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';
import { filter, shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  // posts: ScullyRoute[] = [];
  // private routeSub: Subscription | undefined;

  posts$: Observable<ScullyRoute[]> = of([]);

  constructor(private scullyService: ScullyRoutesService) { }

  ngOnInit(): void {
    // this.routeSub = this.scullyService.available$.subscribe(posts => {
    //   this.posts = posts.filter(post => post.title);
    // });

    this.posts$ = this.scullyService.available$
      .pipe(
        filter(data => !!data),
        map((posts) => posts.filter(post => post.title)),
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  // ngOnDestroy(): void {
  //   this.routeSub?.unsubscribe();
  // }
}
