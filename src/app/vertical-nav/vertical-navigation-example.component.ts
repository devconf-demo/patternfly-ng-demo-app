import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { VerticalNavigationItem } from 'patternfly-ng/navigation/vertical-navigation/vertical-navigation-item';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'vertical-navigation-example',
  styles: [``],
  templateUrl: './vertical-navigation-example.component.html'
})
export class VerticalNavigationExampleComponent implements OnInit {

  showExample: boolean = false;
  navigationItems: VerticalNavigationItem[];
  actionText: string = '';

  constructor(private chRef: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {
    this.navigationItems = [
      {
        title: 'Ipsum',
        iconStyleClass: 'fa fa-dashboard',
        url: '/',
        children: [
          {
            title: 'Item 1-A',
            url: '/ipsum/item-1-a',
            iconStyleClass: 'fa fa-envelope-open'
          },
          {
            title: 'Item 1-B',
            url: '/ipsum/item-1-a',
            iconStyleClass: 'fa fa-envelope-closed'
          }
        ]
      },
      {
        title: 'Dolor',
        iconStyleClass: 'fa fa-star',
        url: '/dolor'
      },
      {
        title: 'Amet',
        iconStyleClass: 'fa fa-bell',
        url: 'react/#/amet'
      },
      {
        title: 'Orbis',
        iconStyleClass: 'fa fa-shield',
        url: '/orbis'
      }
    ];
  }

  onItemClicked($event: VerticalNavigationItem): void {
    this.actionText += 'Item Clicked: ' + $event.title + '\n';
    if ($event.title === 'Amet') {
      window.location.assign(window.location.origin + $event.url);
    }
  }

  onNavigation($event: VerticalNavigationItem): void {
    this.actionText += 'Navigation event fired: ' + $event.title + '\n';
  }
}
