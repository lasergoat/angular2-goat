import {Component, NgClass, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Goat} from './goat';
import {GoatService} from './goat.service';

@Component({ selector: 'my-dashboard' })
@View({
    template: `
      <div class="t-app">
        <header class="t-header">Goatinder</header>
        <main class="t-main">

          <div class="t-goats">

            <div *ng-for="#goat of goats" class="t-goat" [ng-class]="getClass(goat)">
              <img src="images/{{goat.image}}" alt="" class="t-photo">
              <div class="t-info">
                  <span class="t-name">{{goat.name}}</span>
                  <span class="t-age">{{goat.age}}</span>
              </div>
            </div>

            <div class="no-goats" *ng-if="goats.length < 1">
              No Goat Matches Found :-(
            </div>

          </div>

          <div class="t-buttons">
            <button (click)="swipe(false)" class="t-button dislike">
              <i class="fa fa-close fa-3x"></i>
            </button>
            <button (click)="openProfile(goat)" class="t-button info">
              <i class="fa fa-info fa-2x"></i>
            </button>
            <button (click)="swipe(true)" class="t-button like">
              <i class="fa fa-heart fa-3x"></i>
            </button>

          </div>
        </main>
       </div>
    `,
    directives: [NgFor, NgIf, NgClass],
    // directives: [FORM_DIRECTIVES]
    styles: [`
        .goats {list-style-type: none; margin-left: 1em; padding: 0; width: 14em;}
        .goats li { cursor: pointer; }
        .goats li:hover {color: #369; background-color: #EEE; }
        .no-goats {text-align: center; margin-top: 10px;}
    `]
})

export class DashboardComponent {

  private _goats: Goat[];
  public currentGoat: number;

  constructor(private _goatService: GoatService) { }

  get goats() {
    return this._goats || this.getGoats()
  }

  public getClass(goat: Goat) {
    return {
      'liked': goat.liked === true,
      'disliked': goat.liked === false,
      'matched': goat.likedYou === true && goat.liked,
    };
  }

  public swipe(liked: bool) {

    if (!liked) {

      this._goats[this.currentGoat].liked = false;

      setTimeout(() => {

        this._goatService.removeGoat(this.currentGoat)
          .then(goats => this._goats = goats);

      }, 2000);

    } else {

      this._goats[this.currentGoat].liked = true;
    }
  };

  private getGoats() {
    this._goats = [];

    this._goatService.getGoats()
      .then(goats => this._goats = goats);

    this.currentGoat = 0;
    return this._goats;
  }

}
