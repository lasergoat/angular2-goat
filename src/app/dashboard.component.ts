import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Goat} from './goat';
import {GoatService} from './goat.service';

@Component({ selector: 'my-dashboard' })
@View({
    template: `
    	<div class="t-app">
        <header class="t-header">goatinder</header>
        <main class="t-main">
	        <div class="t-goats">

	          <div *ng-for="#goat of goats" class="t-goat" (click)="onSelect(goat)">
	            <img src="images/{{goat.image}}" alt="" class="t-photo">
	            <div class="t-info">
	                <span class="t-name">{{goat.name}}</span>
	                <span class="t-age">{{goat.age}}</span>
	            </div>
	          </div>
	        </div>

          <div class="t-buttons">
            <button class="t-button dislike">
							<i class="fa fa-close fa-3x"></i>
            </button>
            <button class="t-button info">
							<i class="fa fa-info fa-2x"></i>
            </button>
            <button class="t-button like">
							<i class="fa fa-heart fa-3x"></i>
            </button>
          </div>
        </main>
       </div>
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

  constructor(private _goatService: GoatService) { }

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
