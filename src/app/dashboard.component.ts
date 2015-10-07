import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {GoatService} from './goat.service';
import {Goat} from './goat';

@Component({ selector: 'my-dashboard' })
@View({
    template: `
        <header class="t-header"></header>
        <main class="t-main">
        <ul class="t-goats">

          <li *ng-for="#goat of goats" (click)="onSelect(goat)">
            <img src="images/{{goat.image}}" alt="" class="t-photo">
            <div class="t-info">
                <span class="t-name">{{goat.name}}</span>
                <span class="t-age">{{goat.age}}</span>
            </div>
          </li>
        </ul>

          <div class="t-buttons">
            <button class="t-button dislike"></button>
            <button class="t-button info"></button>
            <button class="t-button like"></button>
          </div>
        </main>
    `,
    directives: [NgFor, NgIf],
    // directives: [FORM_DIRECTIVES]
    styles: [`
        .goats {list-style-type: none; margin-left: 1em; padding: 0; width: 14em;}
        .goats li { cursor: pointer; }
        .goats li:hover {color: #369; background-color: #EEE; }
    `]

})
export class DashboardComponent {
  private _goats: Goat[];
  public currentGoat: Goat;

  constructor(private _goatService: GoatsService) { }

  get goats() {
    return this._goats || this.getGoats()
  }

  onSelect(goat: Goat) { this.currentGoat = goat; }

  private getGoats() {
    this._goats = [];

    this._goatService.getGoats()
      .then(goats => this._goats = goats);

    return this._goats;
  }

}
