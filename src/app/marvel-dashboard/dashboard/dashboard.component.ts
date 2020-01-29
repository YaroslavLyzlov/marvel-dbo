import { Component, OnInit } from '@angular/core';
import { MarvelStateService } from '../../marvel-page/marvel-state.service';
function offset(el) {
  return {
    x: el.offsetLeft + el.offsetWidth / 2,
    y: el.offsetTop + el.offsetHeight / 2,
    width: el.offsetWidth,
    height: el.offsetHeight
  };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  pages = [];
  currentElement;
  constructor(private marvelStateService: MarvelStateService) {
    this.pages = marvelStateService.Pages;
  }

  A = {x: 670, y: 769}
  B = {x: 1308, y: 0};
  getD(A = this.A, B = this.B) {
    return Math.sqrt(Math.pow((A.y - B.y), 2) + Math.pow((A.x - B.x), 2));
  }

  getAngle(A = this.A, B = this.B) {
    const angle = Math.atan2(B.y - A.y, B.x - A.x) / Math.PI * 180;
    return -(90 - ((angle < 0) ? angle + 360 : angle));
  }

  onClick(page, element) {
    const elementOffset = offset(element);

    this.pages.forEach(pageItem => {
      pageItem.marked = false;
      pageItem.selected = false;
      pageItem.arrows = [];
    });

    page.selected = true;
    page.anchors.forEach(anchor => {
      const pageElement = this.pages.find(pageItem => pageItem.name === anchor.route.split('/').pop());
      if (pageElement) {
        pageElement.marked = true;
        const pageDOMElement = document.querySelector('#' + pageElement.name);
        const pageDOMElementOffset = offset(pageDOMElement);
        const d = this.getD(elementOffset, pageDOMElementOffset);
        const a = this.getAngle(elementOffset, pageDOMElementOffset);
        page.arrows.push({
          left: elementOffset.x,
          top: elementOffset.y,
          height: d,
          angle: a
        });
      }
    });
  }

  ngOnInit() {
  }

}
