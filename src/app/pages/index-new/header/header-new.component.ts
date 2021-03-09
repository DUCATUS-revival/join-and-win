import { UserService } from 'src/app/service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { hideHeaderInRoutes, adminHeaderInRoutes } from 'src/app/params';

import * as $ from 'jquery';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.scss'],
  host: { '(document:click)': 'onClick($event)' },
})
export class HeaderNewComponent implements OnInit {
  public isBrowser: any;
  public openedLngList = false;
  private translator: TranslateService;
  public languagesList: { lng: string; title: string; active?: boolean }[];
  public currLanguage: string;

  public openMenu = false;

  public hideHeader = false;
  public adminHeader = false;
  public buyHeader = false;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private userService: UserService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        this.hideHeader = !hideHeaderInRoutes.includes(event.url);
        this.buyHeader = event.url.startsWith('/');
        this.adminHeader = !adminHeaderInRoutes.includes(event.url);
      }

      if (event instanceof NavigationError) {
        // console.warn(event.error);
      }
    });

    this.translator = translate;
    this.languagesList = [
      {
        lng: 'eng',
        title: 'Eng',
        active: true,
      },
      {
        lng: 'ita',
        title: 'Ita',
        active: false,
      },
      {
        lng: 'vie',
        title: 'Vie',
        active: false,
      },
      {
        lng: 'deu',
        title: 'Deu',
        active: false,
      },
    ];

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setActiveLanguage(event);
    });

    this.setActiveLanguage({
      lang: translate.currentLang,
    });
  }

  private onClick($event) {
    if ($($event.target).closest('.header-menu-toggle-block').length === 0) {
      if ($($event.target).closest('.select-coin-list-item').length === 0) {
        this.openMenu = false;
      }
    }
    if ($($event.target).closest('.language-select').length === 0) {
      this.openedLngList = false;
    }
  }

  private setActiveLanguage(event) {
    if (this.currLanguage) {
      this.languagesList.map((lang) => {
        if (lang['lng'] === this.currLanguage) {
          lang['active'] = true;
        } else {
          lang['active'] = false;
        }
      });
    }
    this.currLanguage = event.lang;
    window['jQuery']['cookie']('lng', this.currLanguage);

    this.languagesList.map((lang) => {
      if (lang['lng'] === this.currLanguage) {
        lang['active'] = true;
      } else {
        lang['active'] = false;
      }
    });
    this.languagesList.sort((a, b) => {
      return b.active ? 1 : -1;
    });
  }

  public toggleLanguage() {
    this.openedLngList = !this.openedLngList;
  }

  public setLanguage(lng) {
    this.translator.use(lng);
  }

  ngOnInit() {
    // scroll menu
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    var navBar = document.getElementsByClassName('header')[0];

    if (scrollPosY > 100) {
      navBar.classList.add('header-scroll');
    } else if (scrollPosY <= 100) {
      navBar.classList.remove('header-scroll');
    }

    window.onscroll = function changeNav() {
      var scrollPosY = window.pageYOffset | document.body.scrollTop;
      var navBar = document.getElementsByClassName('header')[0];

      if (scrollPosY > 100) {
        navBar.classList.add('header-scroll');
      } else if (scrollPosY <= 100) {
        navBar.classList.remove('header-scroll');
      }
    };
  }

  public logout() {
    this.userService.logout().then(() => {
      this.router.navigate(['/admin/login']);
    });
  }
}
