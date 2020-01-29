import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MarvelStateService } from '../marvel-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-marvel-item',
  templateUrl: './marvel-item.component.html',
  styleUrls: ['./marvel-item.component.styl']
})
export class MarvelItemComponent implements AfterViewInit {
  @ViewChild('htmlImageElement', { static: true }) htmlImageElement: ElementRef<HTMLImageElement>;
  isLoading = false;
  currentPage: any = {
    url: '',
    anchors: [],
    width: 0,
    height: 0
  };
  isReady = false;
  onReadeHtmlImage: Subject<void> = new Subject<void>();
  isHighlightAnchors = false;
  sub;
  constructor(private marvelStateService: MarvelStateService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(({id}) => {
      this.onChangeRoute(id);
    });
    // setTimeout(() => {
    //   router.navigate(['marvel', 'payments-list']);
    // }, 6000);
    window.addEventListener('resize', this.onResize);
  }

  onResize = () => {
    console.log('load');
    const w = this.htmlImageElement.nativeElement.width;
    const h = this.htmlImageElement.nativeElement.height;
    this.currentPage.anchors.map(anchor => {
      anchor.left = anchor.defaultLeft *  w / this.currentPage.width;
      anchor.top = anchor.defaultTop * h / this.currentPage.height;
      anchor.width = anchor.defaultWidth * w / this.currentPage.width;
      anchor.height = anchor.defaultHeight * h / this.currentPage.height;
      return anchor;
    });
  };

  onChangeRoute(id: string) {
    if (this.isReady) {
      // tslint-disable
      this.currentPage = this.marvelStateService.getPage(id);
      return;
    }
    this.onReadeHtmlImage.subscribe(
      () => {
        console.log('2222');
        this.currentPage = this.marvelStateService.getPage(id);
      }
    );
  }

  highlightAnchors() {
    this.isHighlightAnchors = true;
    setTimeout(() => {
      this.isHighlightAnchors = false;
    }, 300);
  }

  transitionToPage(event: Event, anchor) {
    console.log('anchor', anchor);
    event.stopPropagation();
    if (anchor.action) {
      this.isLoading = true;
      this.sub = anchor.action().subscribe(
        result => {
          if (result.answer.transaction_info.status === 'confirmed') {
            this.isLoading = false;
            this.router.navigateByUrl(anchor.route);
            if (this.sub) {
              this.sub.unsubscribe();
            }
          }
          console.log('result', result, anchor);

        }
      );
    } else {
      this.router.navigateByUrl(anchor.route);
    }
  }

  ngAfterViewInit() {
    console.log('hello');
    this.onReadeHtmlImage.next();
    this.isReady = true;
    this.htmlImageElement.nativeElement.addEventListener('load', this.onResize);
  }
}
